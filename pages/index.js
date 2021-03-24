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


function Target({target,radius, distanceRadius}) {

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

function randFloat(range) {
  var min = Math.ceil(range[0]);
  var max = Math.floor(range[1]);
  return Math.random() * (max - min) + min;
}


function nextPos(target,bounds,radius,pad, distanceRadius){

  // const min_dist = CONST.min_dist;
  // const x_range = [pad+radius,bounds[0]-pad-radius]
  // const y_range = [pad+radius,bounds[1]-pad-radius]

  let next = [0,0]
  let t = randFloat([0 ,360])
  next = getPointOnCircumference(t,target, distanceRadius)

  while(!checkInside(next[0], next[1], distanceRadius)){
    let t = randFloat([0 ,360])
    next = getPointOnCircumference(t,target, distanceRadius)
  }

  // while(calcDist(target,next)<min_dist){
  //   next = [randInt(x_range),randInt(y_range)]
  // }
  return next
}


function getPointOnCircumference(t, center, radius){
  let temp_x = radius * Math.cos(t) + center[0];
  let temp_y = radius * Math.sin(t) + center[1];
  return [temp_x, temp_y];
}


function checkInside(x,y, radius){
  if(x + radius < screen.width && x - radius > 0){
    if(y + radius < screen.height && y - radius > 0){
      return true;
    }
  }  
  return false;
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
  const [username,setUsername] = useState("LMAO")
  const [age,setAge] = useState(20)
  const [distanceRadius,setDistanceRadius] = useState(CONST.size1)
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
    
    const next = nextPos(target,bounds,radius,pad, distanceRadius)
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
      'hit' : (calcDist(touch,target)<(2*radius)),
      'username': username,
      'inputDistanceRadius': distanceRadius,
      'inputTargetRadius': radius,
      'inputAge': age,
    }]))

    await setRound(round+1)

    await setPrevTime(now)

    if(calcDist(touch,target)<2*radius){
      const next = nextPos(target,bounds,radius,pad, distanceRadius)
      setTarget(next)
    }
    
    if(log.filter(x=>(x.hit)).length>=CONST.rounds){
      setStatus('end')
    }
      
  },[touch])


  return (
    <>
      <Head>
        <title>Fitts Eval</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </Head>
      
      <div id="touch-bound" className="board" onTouchEnd={(e)=>{handleTouchStart(e)}}>
        <div className="menuItemContainer">
          {(status==='wait')?<div className="startBtn" onClick={init}>Start</div>:''}
          {(status==='wait')?<><input type="number" placeholder="distance radius" className="inputBox" onChange={e => setDistanceRadius(parseInt(e.target.value))}/></>:''}
          {(status==='wait')?<><input type="number" placeholder="target button radius" className="inputBox" onChange={e => setRadius(parseInt(e.target.value))}/></>:''}
          {(status==='wait')?<><input type="text" placeholder="Age" className="inputBox" onChange={e => setAge(parseInt(e.target.value))}/></>:''}
          {(status==='wait')?<><input type="text" placeholder="User name" className="inputBox" onChange={e => setUsername(parseInt(e.target.value))}/></>:''}
        </div>
        <div className="canvas" style={{margin: `${pad}px`}}>
          <pre className="log-box">
            {JSON.stringify(log.map(x=>[x.round,x.dist,x.e_time-x.s_time]),null,1)}
          </pre>
        </div>
        {(status==='go')?<Target radius={radius} target={target} distanceRadius={distanceRadius} />:''}
        {(status==='end')?<div className="startBtn" onClick={()=>saveCsv(log)}>Download</div>:''}
      </div>
    </>
  )
}
