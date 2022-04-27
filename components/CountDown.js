import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useRef, useState } from 'react';


  



export default function CountDown({time}) {
  
  const [isFinished, setIsFinished] = useState(false)
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">0</div>;
    }
  
    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div className=''>
    <div className="timer">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          size={50}
          duration={time}
          strokeWidth={5}
          initialRemainingTime={3}
          colors={["#A30000","#004777", "#F7B801","#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat:true, delay:0})}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
    </div>
  );
}