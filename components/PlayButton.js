import useSound from "use-sound";
import { useState } from "react";
import PauseIcon from "./PauseIcon";
import PlayIcon from "./PlayIcon";
import { useEffect } from "react";
import activities from "../data/activities";
import { useRouter } from "next/router";



export default function PlayButton({ id, prevId, setPrevId, onPlay }) {

  const soundUrl = `/songs/${id}.mp3`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(soundUrl, {
    onend: () => {
      setIsPlaying(false);
    },
  });

  const handleClick = () => {
    setPrevId(id);
    onPlay(() => {
      stop()
      setIsPlaying(false)
    });
    isPlaying ? stop() : play();
    setIsPlaying(!isPlaying);
  };

  

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="Heart">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </span>
    </button>
  );
}
