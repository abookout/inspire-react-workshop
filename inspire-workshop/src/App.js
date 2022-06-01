import React, { useState } from "react";
import "./App.css";

function getRandomInt(min, max) {
  // Math.ceil is a builtin function for getting the ceiling of a number
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const [startTime, setStartTime] = useState(0);
  const [resultTime, setResultTime] = useState(0);

  // After the player clicks start, wait for a random length of time before
  // starting the "timer" when the player can react
  const startWait = () => {
    setGameActive(true);
    setTimerStarted(false);

    // Want to wait for a random length of time between 1 and 3 seconds
    const waitTime = getRandomInt(1000, 3000);

    // Function startTimer will be called after specified number of milliseconds
    setTimeout(startTimer, waitTime);
  };

  // Waiting is over, now the player can click start
  const startTimer = () => {
    const startTime = Date.now();
    setStartTime(startTime);
    setTimerStarted(true);
  };

  // Player clicked "now!", so show them their time!
  const stopTimer = () => {
    setGameActive(false);

    const endTime = Date.now();
    setResultTime(endTime - startTime);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ReactionButton
          gameActive={gameActive}
          timerStarted={timerStarted}
          onStartClick={startWait}
          onReactionClick={stopTimer}
          resultTime={resultTime}
        />
      </header>
    </div>
  );
}

const ReactionButton = (props) => {
  // Shows passing function prop
  let innerText = "";
  let buttonClass = "reaction-button";
  let onButtonClick = null;

  if (props.gameActive === false && props.timerStarted === false) {
    // Before clicking or starting the timer at all
    innerText = "Start";
    onButtonClick = props.onStartClick;
  } else if (props.gameActive === true && props.timerStarted === false) {
    // Waiting a random period of time
    innerText = "wait...";
  } else if (props.gameActive === true && props.timerStarted === true) {
    // The player can click now!
    innerText = "now!";
    buttonClass = "click-it-now";
    onButtonClick = props.onReactionClick;
  } else if (props.gameActive === false && props.timerStarted === true) {
    // Game's done, show the player their score
    innerText = props.resultTime + " ms";
    onButtonClick = props.onStartClick; // Use this function so the player can start again
  }

  return (
    <button className={buttonClass} onClick={onButtonClick}>
      {innerText}
    </button>
  );
};

export default App;
