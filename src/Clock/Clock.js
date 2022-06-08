/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./Clock.css";


export function Clock() {

  //All variables
  const [date, setDate] = useState(new Date());
  let timerId;
  const Ref = useRef(null);
  const [display1, setDisplay1] = useState({});
  const [display2, setDisplay2] = useState({display:"none"});
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes]= useState(0);
  const [seconds, setSeconds] = useState(0);
  //Style
  let show = {
    display:"block"
  }
  let hidden = {
    display: "none"
  }


  //function
  function changeDisplay1() {
      setDisplay1(hidden)
      setDisplay2(show)
  }
  function changeDisplay2() {
      setDisplay2(hidden)
      setDisplay1(show)
  }

  function setNewHour(e) {
    setHours(e.target.value)
  }
  function setNewMinutes(e) {
    setMinutes(e.target.value)
  }
  function setNewSeconds(e){
    setSeconds(e.target.value)
  }
  function DeadTime() {
    let deadline = new Date();
    deadline.setHours(deadline.getHours()+parseInt(hours));
    deadline.setMinutes(deadline.getMinutes()+parseInt(minutes));
    deadline.setSeconds(deadline.getSeconds()+parseInt(seconds));
    return deadline;
  }

  function getRemainTime(e) {
    let difference = e - new Date();
    let heure = ( Math.floor(difference / (1000 * 60 * 60)));
    let minute = (Math.floor((difference / 1000 / 60) % 60));
    let seconde = (Math.floor((difference / 1000) % 60));
    return {
      difference, heure, minute, seconde
    }
  }

  function startTimer(e) {
    const { difference, heure, minute, seconde} = getRemainTime(e);
    if(difference>=0){
      setHours(heure);
      setMinutes(minute);
      setSeconds(seconde);
    }
  }

  const clearTimer = (e) => {
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  function reStart() {
    clearTimer(DeadTime())
  }
  function resetAll() {
    if (Ref.current) clearInterval(Ref.current);
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }
  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }
  //UseEffect Hook
  useEffect(() => {
    timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  });
  useEffect(()=>{
    reStart()
  }, [])

  useEffect(()=>{
    if(hours === 0 && minutes === 0 && seconds === 0){
      alert("Time is up 🔥!")
    }
  },[hours, minutes, seconds])

  return (
    <>
    <div className="tablet">
      <div className="content" style={display1}>
        <input type="text" value={padStartDigit(date.getHours())}/>:
        <input type="text" value={padStartDigit(date.getMinutes())}/>:
        <input type="text" value={padStartDigit(date.getSeconds())}/> <br />
      </div>
      <div className="container" style={display1}>
        <button id="clock1" onClick={changeDisplay1}>Switch to Timer</button>
      </div>




      <div className="content-countdown" style={display2}>
        <input type="text" value={hours} onChange={setNewHour}/>:
        <input type="text" value={minutes} onChange={setNewMinutes}/>:
        <input type="text" value={seconds} onChange={setNewSeconds}/> <br />
      </div>
      <div className="container" style={display2}>
        <button id="reset" onClick={resetAll}>Reset</button>
        <button id="start" onClick={reStart}>Start</button>
        <button id="clock" onClick={changeDisplay2}>Clock</button>
      </div>
    </div>
    </>
  );
}