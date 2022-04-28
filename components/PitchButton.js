import { useState, useRef, useEffect } from "react";
import useSound from "use-sound";
import Image from "next/image";

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function PitchButton({ handleClick, isDead, isDisabled }) {
  const [position, setPosition] = useState({top: 0, left: 0})
  const elementRef = useRef(null);

  useEffect(() => {
    setPosition({
      top:  random(0, window.innerHeight - elementRef.current.clientHeight),
      left: random(0, window.innerWidth - elementRef.current.clientWidth)
    })
  }, []);

  const buttonStyles = {
    position: "absolute",
    top: `${position.top}px`,
    left: `${position.left}px`,
  }

  const onClick = () => {
    setTimeout(function () {
      setPosition({
        top:  random(0, window.innerHeight - elementRef.current.clientHeight),
        left: random(0, window.innerWidth - elementRef.current.clientWidth)
      })
    }, 200)
    handleClick()

  }

  return (
    <div>
      <button ref={elementRef} onClick={onClick} style={buttonStyles} disabled={isDisabled}>
        <span role="img" aria-label="Heart">
          <Image
            width={80}
            height={80}
            alt="Masoca"
            src={isDead ? "/Masoca2Muerto.png" : "/Masoca2.png"}
            className=" h-20 w-20 mx-auto text-gray-400 my-5"
          ></Image>
        </span>
      </button>
    </div>
  );
}
