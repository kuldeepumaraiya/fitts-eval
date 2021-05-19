import { useState, useEffect } from 'react';
import {Howl, Howler} from 'howler';
import Head from 'next/head';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import beep from '../public/audio/beep.mp3';
// import errorBeep from '../public/audio/errorBeep.mp3';
// import rewardBeep from '../public/audio/rewardBeep.mp3';
import useSound from 'use-sound';



const CONST = {
  min_dist : 30,
  size1 : 25,
  size2 : 60,
  size3 : 61,
  rounds : 15,
  distanceLowerBound: 50,
  distanceUpperBound: 500,
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


function Target({target,radius, distanceRadius, name}) {
  return(
    <div className={"target-box "} id={name} style={{
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


function nextPos(target,bounds,radius,pad, distanceRadius, mode){

  // const min_dist = CONST.min_dist;
  // const x_range = [pad+radius,bounds[0]-pad-radius]
  // const y_range = [pad+radius,bounds[1]-pad-radius]
  if(mode == "FC"){
    distanceRadius = randFloat([CONST.distanceLowerBound, CONST.distanceUpperBound]); 
  }
  let next = [0,0]
  let t = randFloat([0 ,360])
  next = getPointOnCircumference(t,target, distanceRadius)

  while(!checkInside(next[0], next[1], distanceRadius, pad)){
    if(mode == "FC"){
      distanceRadius = randFloat([CONST.distanceLowerBound, CONST.distanceUpperBound]); 
    }
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


function checkInside(x,y, radius, pad){
  if(x + radius + pad < screen.width && x - radius - pad > 0){
    if(y + radius + pad< screen.height && y - radius - pad> 0){
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
  
  const startSound = new Howl({ src : 'beep.mp3'})
  const errorSound = new Howl({ src : 'errorbeep.mp3'})
  const rewardSound = new Howl({ src : 'rewardbeep.mp3'})
  Howler.volume(100);

  const [pad,setPad] = useState(CONST.size1)
  const [radius,setRadius] = useState(CONST.size1)
  const [username,setUsername] = useState("LMAO")
  const [age,setAge] = useState(20)
  const [distanceRadius,setDistanceRadius] = useState(CONST.size1 + CONST.size2)
  const [bounds, setBounds] = useState([0,0])
  const [target, setTarget] = useState([0,0])
  const [target2, setTarget2] = useState([50,100])
  const [touch, setTouch] = useState([radius,radius])
  const [next, setNext] = useState([radius,radius])
  const [score, setScore] = useState(0)
  
  const [round,setRound] = useState(0)
  const [time, setTime] = useState(0)
  const [prevTime,setPrevTime] = useState(0)

  const [status,setStatus] = useState('frontPage')
  const [log,setLog] = useState([])
  const [mode, setMode] = useState("MT")
  const [radioType, setRadioType] = useState("NT")

  function handleTouchEnd(event){
    setTouch([event.changedTouches[0].clientX,event.changedTouches[0].clientY])
  }

  

  function init(){
    setStatus('go')
    setTime(Date.now())
    setPrevTime(Date.now())
    
    const next = nextPos(target,bounds,radius,pad, distanceRadius, mode)
    setTarget(next)
    if(mode === "MT"){
      const next2 = nextPos(next,bounds,radius,pad, distanceRadius, mode)
      setTarget2(next2)
    }else{
      startSound.play()
    }
  }

  useEffect(()=>{
    
    setBounds([
      parseInt(document.getElementById("touch-bound").getBoundingClientRect().width),
      parseInt(document.getElementById("touch-bound").getBoundingClientRect().height)
    ])
    setTarget([radius+pad,radius+pad])
    if(mode === "MT"){
      setTarget2([radius+pad+ distanceRadius, radius+pad+distanceRadius])
    }
    
  },[])


  function saveCsv(data){
    let csvStr = convertToCSV(data)
    let csvContent = "data:text/csv;charset=utf-8,"+csvStr
    var encodedUri = encodeURI(csvContent);
    var name = mode + "_" + username +"_" + age + "_" + radius;
    if(mode === "MT"){
      name  = name + "_" + distanceRadius;
    }
    name = name + "_" + radioType
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", name + ".csv");
    document.body.appendChild(link); 

    link.click();
  }

  useEffect(async()=>{
    if(status!=='go')return;
    try {
      if(mode === 'FC'){
        if(document.getElementById("target1").style.display === 'none') return;
        const now = Date.now()
        
        await setRound(round+1)
  
        await setPrevTime(now)
  
        let calculatedDist = calcDist(touch,target);
  
        setLog(log.concat([{
          'round': round+1,
          'target_x' : Math.round(target[0]),
          'target_y' : Math.round(target[1]),
          'touch_x' : Math.round(touch[0]),
          'touch_y' : Math.round(touch[1]),
          'distance' : Math.round(calculatedDist),
          'hit' : (calculatedDist<(radius)),
          'username': username,
          'inputTargetRadius': radius,
          'inputAge': age,
        }]))
        
          
        document.getElementById("target1").style.display = "none";
        
        
        if(log.length>=CONST.rounds-1){
          setStatus('end')
        }
  
  
        
        if(calculatedDist<(radius)){
          setScore(score+1);
          document.getElementById("touch-bound").style.backgroundColor = "green";
          rewardSound.play();
        }else{
          document.getElementById("touch-bound").style.backgroundColor = "red";
          errorSound.play();
        }
        
        setTimeout(()=>{
          document.getElementById("touch-bound").style.backgroundColor = "white";
          const next = nextPos(target,bounds,radius,pad, distanceRadius, mode)
          setTarget(next)
          document.getElementById("target1").style.display = "block";
        }, 1000);
  
      }else if(mode === 'MT'){ // For MT
        if(status!=='go')return;
  
        if(( document.getElementById("target2").style.display === '' ||
        document.getElementById("target2").style.display === 'block') && 
        ( document.getElementById("target1").style.display === 'none')){
  
          let calculatedDist = calcDist(touch,target2);
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
            'distance' : Math.round(calculatedDist),
            'hit' : (calculatedDist<(radius)),
            'username': username,
            'inputDistanceRadius': distanceRadius,
            'inputTargetRadius': radius,
            'inputAge': age,
          }]))
  
          
        
          await setPrevTime(now)
          
          if(log.length>=CONST.rounds-1){
            setStatus('end')
          }
  
          if(calculatedDist<(radius)){
            setScore(score+1);
            document.getElementById("touch-bound").style.backgroundColor = "green";
            document.getElementById("target2").firstChild.style.backgroundColor = "green";
            rewardSound.play();
          }else{
            document.getElementById("touch-bound").style.backgroundColor = "red";
            document.getElementById("target2").firstChild.style.backgroundColor = "red";
            errorSound.play();
          }
          
          setTimeout(()=>{
            document.getElementById("touch-bound").style.backgroundColor = "white";
            const next1 = nextPos(target,bounds,radius,pad, distanceRadius, mode)
            setTarget(next1)
    
            const next2 = nextPos(next1,bounds,radius,pad, distanceRadius, mode)
            setTarget2(next2)
            document.getElementById("target2").firstChild.style.backgroundColor = "black";
            document.getElementById("target1").style.display = 'block';
            document.getElementById("target2").style.display = 'block';
          }, 1000);  
  
        }
        
        
        else if(( document.getElementById("target1").style.display === '' ||
        document.getElementById("target1").style.display === 'block') && 
        ( document.getElementById("target2").style.display === 'none')){
          
          let calculatedDist = calcDist(touch,target);
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
            'distance' : Math.round(calculatedDist),
            'hit' : (calculatedDist<(radius)),
            'username': username,
            'inputDistanceRadius': distanceRadius,
            'inputTargetRadius': radius,
            'inputAge': age,
          }]))
  
          
        
          await setPrevTime(now)
          
          if(log.length>=CONST.rounds-1){
            setStatus('end')
          }
  
          if(calculatedDist<(radius)){
            setScore(score+1);
            document.getElementById("touch-bound").style.backgroundColor = "green";
            document.getElementById("target1").firstChild.style.backgroundColor = "green";
            rewardSound.play();
          }else{
            document.getElementById("touch-bound").style.backgroundColor = "red";
            document.getElementById("target1").firstChild.style.backgroundColor = "red";
            errorSound.play();
          }
          
          setTimeout(()=>{
            document.getElementById("touch-bound").style.backgroundColor = "white";
            const next1 = nextPos(target,bounds,radius,pad, distanceRadius, mode)
            setTarget(next1)
  
            const next2 = nextPos(next1,bounds,radius,pad, distanceRadius, mode)
            setTarget2(next2)
            document.getElementById("target1").firstChild.style.backgroundColor = "black";
            document.getElementById("target1").style.display = 'block';
            document.getElementById("target2").style.display = 'block';
  
          }, 1000);  
  
        }
        
        else if((( document.getElementById("target1").style.display === '' ||
        document.getElementById("target1").style.display === 'block') && 
        ( document.getElementById("target2").style.display === '' ||
        document.getElementById("target2").style.display === 'block'))){ // First target clicked
          
  
          let calculatedDist1 = calcDist(touch,target);
          let calculatedDist2 = calcDist(touch,target2);
  
          if(calculatedDist1 < radius){
            const now = Date.now()
        
            await setPrevTime(now)
    
            document.getElementById("target1").style.display = 'none';
            startSound.play()
          
          }else if(calculatedDist2 < radius){
  
            const now = Date.now()
        
            await setPrevTime(now)
    
            document.getElementById("target2").style.display = 'none';
            startSound.play()
          
          }
          
        }
  
      }
      
      setTchStart(false);

    } catch (error) {
      console.log("An error occured")
    }
    
  },[touch])

  function handleRadioGroup(e){
    setRadioType(e.target.value)
  }

  return (
    <>
    
      <Head>
        <title>Fitts Eval</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </Head>
      
      <div id="touch-bound" className="board" onTouchEnd={(e)=>{handleTouchEnd(e)}}>
        <div className="menuItemContainer front-page"> 
          {(status==='frontPage') ? <div className="startBtn wider" onClick={() => {setMode("MT"); setStatus("wait1");}}>main task</div>:''}
          {(status==='frontPage') ? <div className="startBtn wider" onClick={() => {setMode("FC"); setStatus("wait2");}}>finger callibration</div>:''}
        </div>
          
        <div className="menuItemContainer">
          {(status==='wait1')?<div className="startBtn" onClick={init}>Start</div>:''}
          {(status==='wait1')?
          <div className="radio-button-wrapper">
            <RadioGroup row aria-label="position" name="position" defaultValue="NT" onChange={handleRadioGroup}>
              <FormControlLabel
                value="NT"
                control={<Radio color="primary" />}
                label="NT"
                labelPlacement="top"
              />
              <FormControlLabel
                value="DT"
                control={<Radio color="primary" />}
                label="DT"
                labelPlacement="top"
              />
              <FormControlLabel
                value="NF"
                control={<Radio color="primary" />}
                label="NF"
                labelPlacement="top"
              />
              <FormControlLabel
                value="DF"
                control={<Radio color="primary" />}
                label="DF"
                labelPlacement="top"
              />
          </RadioGroup>
          </div>
          :''}
          {(status==='wait1')?<><input type="number" placeholder="distance radius" className="inputBox" onChange={e => setDistanceRadius(parseInt(e.target.value))}/></>:''}
          {(status==='wait1')?<><input type="number" placeholder="target button radius" className="inputBox" onChange={e => setRadius(parseInt(e.target.value))}/></>:''}
          {(status==='wait1')?<><input type="text" placeholder="Age" className="inputBox" onChange={e => setAge(parseInt(e.target.value))}/></>:''}
          {(status==='wait1')?<><input type="text" placeholder="User name" className="inputBox" onChange={e => setUsername(e.target.value)}/></>:''}
        </div>

        <div className="menuItemContainer">
          {(status==='wait2')?<div className="startBtn" onClick={init}>Start</div>:''}
          {(status==='wait2')?
          <div className="radio-button-wrapper">
            <RadioGroup row aria-label="position" name="position" defaultValue="NT" onChange={handleRadioGroup}>
              <FormControlLabel
                value="NT"
                control={<Radio color="primary" />}
                label="NT"
                labelPlacement="top"
              />
              <FormControlLabel
                value="DT"
                control={<Radio color="primary" />}
                label="DT"
                labelPlacement="top"
              />
              <FormControlLabel
                value="NF"
                control={<Radio color="primary" />}
                label="NF"
                labelPlacement="top"
              />
              <FormControlLabel
                value="DF"
                control={<Radio color="primary" />}
                label="DF"
                labelPlacement="top"
              />
          </RadioGroup>
          </div>
          :''}
          {(status==='wait2')?<><input type="number" placeholder="target button radius" className="inputBox" onChange={e => setRadius(parseInt(e.target.value))}/></>:''}
          {(status==='wait2')?<><input type="text" placeholder="Age" className="inputBox" onChange={e => setAge(parseInt(e.target.value))}/></>:''}
          {(status==='wait2')?<><input type="text" placeholder="User name" className="inputBox" onChange={e => setUsername(e.target.value)}/></>:''}
        </div>
        <div className="canvas" style={{margin: `${pad}px`}}>
          <pre className="log-box">
            {JSON.stringify(log.map(x=>[x.round,x.dist,x.e_time-x.s_time]),null,1)}
          </pre>
        </div>
        {(status==='go')?
        <>
          <span className="score-board">{score}/{CONST.rounds}</span>
          {mode === 'FC' ?
            <Target radius={radius} target={target} distanceRadius={distanceRadius} name="target1"/>
          :
            <>
              <Target radius={radius} target={target} distanceRadius={distanceRadius} name="target1"/>
              <Target radius={radius} target={target2} distanceRadius={distanceRadius} name="target2"/>
            </>
          }
          
        </>
        
        :''}
        {(status==='end')
        ?
        <div className="menuItemContainer  front-page">
          <div className="end-score-wrapper">
            <span>your score</span>
            <span>{score}/{CONST.rounds}</span>
          </div>
          <div className="end-buttons-wrapper">
            <div className="startBtn" onClick={()=>saveCsv(log)}>download</div>
            <div className="startBtn" onClick={()=>window.location.reload()}>cancel</div>
          </div>
        </div>
        :''}
      </div>
    </>
  )
}
