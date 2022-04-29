import {useState} from "react"
import useSound from "use-sound";

export default function Demo() {
    const soundUrl = '/songs/Click.wav';
  
    const [playbackRate, setPlaybackRate] = useState(0.75);
  
    const [play] = useSound(soundUrl, {
      playbackRate,
      volume: 0.5,
    });
  
    const handleClick = () => {
      setPlaybackRate(playbackRate + 0.05);
      play();
    };
  
    return (
      <button onClick={handleClick}>
        <span role="img" aria-label="Heart">
          💖
        </span>
      </button>
    );
  }