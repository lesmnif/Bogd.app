import useSound from "use-sound";
import { useState } from "react";
import PauseIcon from "./PauseIcon"
import PlayIcon from "./PlayIcon"
import { useEffect} from "react";
import activities from "../data/activities";


export default function PlayButton({id}) {
  
  const newActivities = activities.filter((activity) => activity.isSong)
  const soundUrl = `/songs/${id}.mp3`;
  
  const [ isPlaying, setIsPlaying] = useState(false)
  const [ prevSong, setPrevSong] = useState("")
  const [play, { stop }] = useSound(soundUrl, {
    onend: () =>{
      setIsPlaying(false)
    },
  });
  
  const handleClick = () =>{
    isPlaying ? stop() : play()
    setIsPlaying(!isPlaying)
  }
 
    return (
      <button onClick={handleClick}>
        <span role="img" aria-label="Heart">
          {isPlaying ? <PauseIcon/> : <PlayIcon/>}
        </span>
    </button>
    );
}