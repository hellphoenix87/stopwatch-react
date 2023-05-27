import React, { useState, useEffect } from "react";
import "./styles/Stopwatch.css"; // import the css file

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggleStopwatch = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  const resetStopwatch = () => {
    setTime(0);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
  };

  const padTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div
      className={`stopwatch-container ${
        isRunning ? "heartbeat-animation" : ""
      }`}
    >
      <h1>Stopwatch</h1>

      <div className="counter">{formatTime()}</div>
      <button onClick={toggleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;
