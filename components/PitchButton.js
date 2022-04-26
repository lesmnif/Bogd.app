import { useState } from "react";
import useSound from "use-sound";



function random(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min;
}


export default function Demo({ handleClick, isDead }) {
  const topHeigth = random(0, window.innerHeight)
  const leftWidth = random(0, window.innerWidth) // Math.floor(Math.random() * (-(window.innerHeight-208) - -30)) + -30;
  // const leftWidth = Math.floor(Math.random() * ((window.innerWidth-674) - -254)) + -254;
  const buttonStyles = {
          position: "absolute",
          top:topHeigth,
          left:leftWidth,
        }
  return (
    <div style={{
      // position: 'relative',
    }}>
      <button
        onClick={handleClick}
        style={buttonStyles}
      >
        <span role="img" aria-label="Heart">
          <img
            src={isDead ? "/Masoca2Muerto.png" : "/Masoca2.png"}
            className=" h-52 w-52 mx-auto text-gray-400 my-5"
          ></img>
        </span>
      </button>
    </div>
  );
}
