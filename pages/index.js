import { useState, useEffect } from 'react'
import Head from 'next/head'

const CONST = {
  min_dist : 30,
  size1 : 47,
  size2 : 54,
  size3 : 61,
  rounds : 30
}




function convertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = Object.keys(array[0]).join(',');
  str=str+'\r\n';

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if (line != '') line += ','
      line += array[i][index];
    }
    str += line + '\r\n';
  }
  return str;
}


function Target({target,radius}) {

  return(
    <div className="target-box" style={{
      left:`${target[0]-2*radius}px`,
      top:`${target[1]-2*radius}px`,
      width:`${4*radius}px`,
      height:`${4*radius}px`
    }}>
      <div className="target-core" style={{
        left:`${radius}px`,
        top:`${radius}px`,
        width:`${2*radius}px`,
        height:`${2*radius}px`
      }}>
      </div>
    </div>
  )
}



function randInt(range) {
  var min = Math.ceil(range[0]);
  var max = Math.floor(range[1]);
  return Math.floor(Math.random() * (max - min) + min);
}


function nextPos(target,bounds,radius,pad){

  const min_dist = CONST.min_dist;
  const x_range = [pad+radius,bounds[0]-pad-radius]
  const y_range = [pad+radius,bounds[1]-pad-radius]

  let next = [randInt(x_range),randInt(y_range)]

  while(calcDist(target,next)<min_dist){
    next = [randInt(x_range),randInt(y_range)]
  }
  return next
}


function calcDist(from,to){

  try{
    var x=parseFloat(from[0])-parseFloat(to[0])
    var y=parseFloat(from[1])-parseFloat(to[1])
    return Math.sqrt(x*x + y*y);
  }
  catch{
    return -1
  }
  
}

export default function Home() {

  const [pad,setPad] = useState(CONST.size1)
  const [radius,setRadius] = useState(CONST.size1)
  const [bounds, setBounds] = useState([0,0])
  const [target, setTarget] = useState([0,0])
  const [touch, setTouch] = useState([radius,radius])
  const [next, setNext] = useState([radius,radius])
  
  const [round,setRound] = useState(0)
  const [time, setTime] = useState(0)
  const [prevTime,setPrevTime] = useState(0)

  const [status,setStatus] = useState('wait')
  const [log,setLog] = useState([])


  function handleTouchStart(event){
    console.log(event.changedTouches[0].clientX,event.changedTouches[0].clientY)
    setTouch([event.changedTouches[0].clientX,event.changedTouches[0].clientY])
  }
  

  function init(){
    setStatus('go')
    setTime(Date.now())
    setPrevTime(Date.now())
    
    const next = nextPos(target,bounds,radius,pad)
    setTarget(next)
  }

  useEffect(()=>{
    setBounds([
      parseInt(document.getElementById("touch-bound").getBoundingClientRect().width),
      parseInt(document.getElementById("touch-bound").getBoundingClientRect().height)
    ])
    setTarget([radius+pad,radius+pad])
  },[])


  function saveCsv(data){
    let csvStr = convertToCSV(data)
    let csvContent = "data:text/csv;charset=utf-8,"+csvStr
    var encodedUri = encodeURI(csvContent);
    
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `fitts_${(new Date()).toISOString()}.csv`);
    document.body.appendChild(link); 

    link.click();
  }
  

  useEffect(async()=>{
    if(status!=='go')return;
    
    const now = Date.now()
        setLog(log.concat([{
      'round': round+1,
      'target_x' : Math.round(target[0]),
      'target_y' : Math.round(target[1]),
      'touch_x' : Math.round(touch[0]),
      'touch_y' : Math.round(touch[1]),
      's_time': prevTime-time,
      'e_time': now-time,
      'duration' : now - prevTime,
      'distance' : Math.round(calcDist(touch,target)),
      'hit' : (calcDist(touch,target)<(radius))
      }]))
    await setRound(round+1)

    await setPrevTime(now)

        const next = nextPos(target,bounds,radius,pad) 
        setTarget(next) 

    if(log.length>=CONST.rounds){
      setStatus('end')
    }
    document.getElementById(touch-bound).style.backgroundColor="red";
  setTimeout(()=>{
  document.getElementById("touch-bound").style.backgroundColor="white";
  }300);
      
  },[touch])


  return (
    <>
      <Head>
        <title>Fitts Eval</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </Head>
      
      <div id="touch-bound" className="board" onTouchStart={(e)=>{handleTouchStart(e)}}>
        {(status==='wait')?<div className="startBtn" onClick={init}>Start</div>:''}
        {(status==='wait')?<input type="number" placeholder="target radius" className="inputBox" onChange={e => setRadius(parseInt(e.target.value))}/>:''}
        
        <div className="canvas" style={{margin: `${pad}px`}}>
          <pre className="log-box">
            {JSON.stringify(log.map(x=>[x.round,x.dist,x.e_time-x.s_time]),null,1)}
          </pre>
        </div>
        {(status==='go')?<Target radius={radius} target={target}/>:''}
        {(status==='end')?<div className="startBtn" onClick={()=>saveCsv(log)}>Download</div>:''}
      </div>
    </>
  )
}
