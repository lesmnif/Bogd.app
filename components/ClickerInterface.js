/* This example requires Tailwind CSS v2.0+ */


import { duration } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Countdown from "./CountDown"
import toast from "react-hot-toast";
import Background from "./Background"

// Tens {time} segons pero clicar el màxim número de vegades al seu cap (es el nen que no et fa cas, esforça't)
export default function Example() {

const [time, setTime] = useState()
const [isHidden, setIsHidden] = useState(true)
const router = useRouter();


function handleClick(time){
    // toast(
    //     `Tens ${time} segons pero clicar el màxim número de vegades al seu cap (es el nen que no et fa cas, esforça't). \n\n`
    //     ,
    //     {
    //       duration: 6000,
    //     }
    //   );
    toast(`Tens ${time} segons per clicar el màxim número de nens, sort!`,
  {
  
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
      setIsHidden(!isHidden)
      setTime(time)
      
}
  return (
  isHidden ? (<div>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Preparat per jugar ?</span>
          <span className="block text-xl text-gray-800 mt-4"> Escull el temps que tinguis disponible per jugar-hi.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <span className="relative z-0 inline-flex shadow-sm rounded-md">
              <button
                type="button"
                value={10}
                onClick={(event) => handleClick(event.target.value)}
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-500 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                10 segons
              </button>
              <button
                type="button"
                onClick={(event) => handleClick(event.target.value)}
                value={30}
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-500 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                30 segons
              </button>
              <button
                value={60}
                onClick={(event) => handleClick(event.target.value)}
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
  </div>) : <Background time={time}/>
  );
}
