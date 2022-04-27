import PitchButton from "./PitchButton";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { TramRounded } from "@mui/icons-material";

export default function Background({ time, clicks, setClicks }) {
  const soundUrl = "/songs/Click.wav";

  const [isDead, setIsDead] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setClicks((clicks) => clicks + 1);
    setPlaybackRate(playbackRate + 0.02);
    play();
    setIsDead(!isDead);
    setIsDisabled(TramRounded)
    setTimeout(function () {
      setIsDead(false);
      setIsDisabled(false)
    }, 200)
  };

  return (
    <div className="block w-full rounded-lg text-center">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8"></div>
      <div className="lg:col-span-1">
        <blockquote className="mt-6 text-white">
          <PitchButton
            handleClick={handleClick}
            isDead={isDead}
            isDisabled={isDisabled}
          />
        </blockquote>
      </div>
    </div>
  );
}
