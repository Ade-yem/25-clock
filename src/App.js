import React, { useState } from "react";

import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [running, setRunning] = useState(false);

  return (
    <div className="wrapper">
      <h2 className="header">25 + 5 Clock</h2>

      <TimerLengthControl
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        sessionLength={sessionLength}
        running={running}
        setRunning={setRunning}
      />
      <Timer
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        sessionLength={sessionLength}
        running={running}
        setRunning={setRunning}
      />
      <TimerControl
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        sessionLength={sessionLength}
        running={running}
        setRunning={setRunning}
      />
    </div>
  );
}

export default App;

const TimerLengthControl = ({
  breakLength,
  setBreakLength,
  setSessionLength,
  sessionLength,
  running,
  setRunning,
}) => {
  const sessionIncrease = () => {
    if (sessionLength <= 60) {
      setSessionLength(sessionLength += 1);
    }
  };
  const breakIncrease = () => {
    if (breakLength <= 60) {
      setBreakLength((breakLength += 1));
    }
  };
  const sessionDecrease = () => {
    if (sessionLength >= 1) {
      setSessionLength((sessionLength -= 1));
    }
  };
  const breakDecrease = () => {
    if (breakLength >= 1) {
      setBreakLength((breakLength -= 1));
    }
  };
  return (
    <div className="lengths">
      <div className="break">
        <h3 id="break-label">Break Length</h3>
        <div className="funct">
          <button id="break-decrement" onClick={breakDecrease}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          <span id="break-length">{breakLength}</span>
          <button id="break-increment" onClick={breakIncrease}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="session">
        <h3 id="session-label"> Session Length</h3>
        <div className="funct">
          <button id="session-decrement" onClick={sessionDecrease}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          <span id="session-length">{sessionLength}</span>
          <button id="session-increment" onClick={sessionIncrease}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

function Timer({
  breakLength,
  setBreakLength,
  setSessionLength,
  sessionLength,
  running,
  setRunning,
}) {
  return (
    <div className="timer">
      <h4 id="timer-label">Session</h4>
      <h1 id="time-left">25:00</h1>
    </div>
  );
}

function TimerControl({
  breakLength,
  setBreakLength,
  setSessionLength,
  sessionLength,
  running,
  setRunning,
}) {
  return (
    <div className="controls">
      <button id="start_stop">
        <i class="fa fa-play" aria-hidden="true">
          <i class="fa fa-pause" id="start_stop" aria-hidden="true"></i>
        </i>
      </button>

      <button id="reset">
        <i class="fa fa-refresh" aria-hidden="true"></i>
      </button>
    </div>
  );
}
