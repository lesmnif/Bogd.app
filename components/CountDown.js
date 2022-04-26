import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useRef, useState } from 'react';
import Background from "./Background"


  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late!</div>;
    }
  
    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };



export default function CountDown({time}) {

  return (
    <div className=' mr-1'>
    <div className="timer">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          size={75}
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat:false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        Change component properties in the code filed on the right to try
        difference functionalities
      </p>
    </div>
    </div>
  );
}