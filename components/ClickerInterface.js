/* This example requires Tailwind CSS v2.0+ */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Countdown from "./CountDown";
import toast from "react-hot-toast";
import Background from "./Background";
import useLocalStorage from "./useLocalStorage";

export default function Example() {
  const [gameDuration, setGameDuration] = useState();
  const [isChoosingDuration, setIsChoosingDuration] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [records, setRecords] = useLocalStorage("records", {
    10: 0,
    30: 0,
    60: 0,
  });

  const router = useRouter();

 
  useEffect(() => {
    const handleStart = (url) => {
     toast.remove()
    };

    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);
  

  console.log("those are my clicks", clicks, records);

  function handleClick(time) {
    setClicks(0);
    const waitingTimeMs = 3000;

    toast(<Countdown time={time} />, {
      duration: time * 1000 + waitingTimeMs,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    toast(`Tens ${time} segons per clicar el màxim número de nens, sort!`, {
      duration: waitingTimeMs,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsChoosingDuration(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, waitingTimeMs);
    setGameDuration(time);
    setTimeout(function () {
      setIsChoosingDuration(true);
    }, time * 1000 + waitingTimeMs);
  }

  useEffect(() => {
    if (!isChoosingDuration) {
      return;
    }
    setIsPlaying(false);
    if (clicks >= records[gameDuration]) {
      setRecords((prevRecords) => ({
        ...prevRecords,
        [gameDuration]: clicks,
      }));
      toast(`Felicitats! El teu nou record son ${clicks} nens!`, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (clicks > 0) {
      toast(
        `No has pogut superar el teu récord (${records[gameDuration]}), la próxima vegada esforça't més!`,
        {
          icon: "😰​",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }
      );
    }
  }, [isChoosingDuration]);

  if (!isChoosingDuration) {
    return (
      isPlaying && (
        <Background time={gameDuration} clicks={clicks} setClicks={setClicks} />
      )
    );
  }

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Preparat per jugar ?</span>
            <span className="block text-xl text-gray-800 mt-4">
              {" "}
              Escull el temps que tinguis disponible per jugar-hi.
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  onClick={() => handleClick(10)}
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-500 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  10 segons
                </button>
                <button
                  type="button"
                  onClick={() => handleClick(30)}
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-500 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  30 segons
                </button>
                <button
                  onClick={() => handleClick(60)}
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-500 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  60 segons
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
