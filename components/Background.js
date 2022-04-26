import PitchButton from "./PitchButton"
import { useState } from "react";
import useSound from "use-sound";
import CountDown from "./CountDown";

export default function Example({time}) {
    const soundUrl = "/songs/Click.wav";
        
       console.log("this is my time", time)
        const [isDead, setIsDead] = useState(false)
        const [playbackRate, setPlaybackRate] = useState(0.75);

      
        const [play] = useSound(soundUrl, {
          playbackRate,
          volume: 0.5,
        });
      
        const handleClick = () => {
          setPlaybackRate(playbackRate + 0.02);
          play();
          setIsDead(!isDead)
    
        };
      

    return (
      <div className="relative block w-full rounded-lg p-12 text-center">
         <p ><CountDown time={time}/></p>
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            </div>
            <div className="relative lg:col-span-1">
              <blockquote className="mt-6 text-white">
                <PitchButton handleClick={handleClick} isDead={isDead}/>
              </blockquote>
            </div>
          </div>
    )
  }