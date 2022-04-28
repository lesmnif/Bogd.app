import {
    ClockIcon,
    FireIcon,
    LocationMarkerIcon,
    UsersIcon,
  } from "@heroicons/react/solid";
  import Link from "next/link";
  import activitiesData from "../data/activities";
  import { Searcher } from "fast-fuzzy";
  import { useEffect, useState } from "react";
  import useLocalStorage from "./useLocalStorage";
  import Star from "./Star";
  import CustomFilter from "./CustomFilterSongs";
  import NoResults from "../components/NoResults";
  import toast, { Toaster } from 'react-hot-toast'
  import { useRouter } from 'next/router'
  import Code from 'react-content-loader'
  import useSound from "use-sound";
  import PitchButton from "./PitchButton"
  import PlayButton from "./PlayButton"

  
  // Hook
  
  
  const defaultSearcher = new Searcher(activitiesData, {
    keySelector: (activity) => {
      return [activity.title, activity.descripció, ...activity.etiquetes];
    },
  });
  
  function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
  }
  function isValueInRange(range, value) {
    return range[0] <= value && range[1] >= value;
  }
  
  
  export default function List({ query, setQuerySearch, breadcrumbs }) {
    const [activities, setActivities] = useState([...activitiesData]);
    const [searcher, setSearcher] = useState(defaultSearcher);
    const [etiquetesFilter, setEtiquetesFilter] = useState([]);
    const [maxAge, setMaxAge] = useState([]);
    const [maxPart, setMaxPart] = useState([]);
    const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", []);
    const [localActivities, setLocalActivities] = useLocalStorage(
      "localActivities",
      []
    );
    
    const router = useRouter();
  
      console.log("this is my etiquetes filter", etiquetesFilter)

    useEffect(() => {
      const handleStart = (url) => {
        console.log(`Loading: ${url}`);
        setMaxAge([]);
        setMaxPart([]);
        setEtiquetesFilter([]);
        setQuerySearch();
      };
    
  
      router.events.on("routeChangeStart", handleStart);
  
      return () => {
        router.events.off("routeChangeStart", handleStart);
      };
    }, [router]);

  

  useEffect(()=>{
    const newActivities = activitiesData.filter((activity) => activity.isSong && activity)
    setActivities(newActivities)
  }, [])
  
  useEffect(() =>{
    const localActivities = JSON.parse(localStorage.getItem("localActivities"))
    if(localActivities != null){
    for (let i=0; i < localActivities.length; i++){
      if(!activities.id?.includes(localActivities[i].id) && localActivities[i].isSong){
        setActivities((prevState) =>{
          const newActivities = [...prevState]
          newActivities.push(localActivities[i])
          const myIds = newActivities.map((activity) => activity.id)
          return newActivities
      })
    }
  }
}}, [])
 

    useEffect(() => {
      const searcher = new Searcher(activities, {
        keySelector: (activity) => {
          return [activity.title, activity.descripció, ...activity.etiquetes];
        },
      });
      setSearcher(searcher);
    }, [activities]);


  
    const filteredQuery = query === "" ? activities : searcher.search(query);
    const filteredAge =
      maxAge.length === 0
        ? filteredQuery
        : filteredQuery.filter((activity) => {
            return maxAge.some(
              (ageInterval) =>
                isValueInRange(ageInterval, activity.edatmin) ||
                isValueInRange(ageInterval, activity.edatmax)
            );
          });
    
    const filteredFinal =
      etiquetesFilter.length === 0
        ? filteredAge
        : filteredAge.filter((activity) =>
            etiquetesFilter.every((etiqueta) =>
              activity.etiquetes.includes(etiqueta)
            )
          );
  
  
    const hasMounted = useHasMounted();
    if (!hasMounted) {
        <Code
          width={100}
          height={100}
          viewBox="0 0 100 100"
          style={{ width: '100%' }}
        />
    }
  
  
    function onClickDelete(id){
      if (confirm('Segur que vols borrar la activitat ?')) {
        const myActivities = JSON.parse(localStorage.getItem("localActivities"))
        const myIds = myActivities.map((activity) => activity.id)
        const index = myIds.indexOf(id)
        if(favoritesIds.includes(id)){
          const idsIndex = favoritesIds.indexOf(id)
          setFavoritesIds((prevState) =>{
            const newIds = [...prevState]
            newIds.splice(idsIndex, 1)
            return newIds
          })}
        myActivities.splice(index, 1)
        router.push("/")
        toast.success("Activitat borrada! 🔥")
        setLocalActivities(myActivities)
      }
    }


    return <div className={filteredFinal.length === 0 ? "bg-gray-50 shadow overflow-hidden sm:rounded-md" : " bg-white shadow overflow-hidden sm:rounded-md" }>
    <div className="my-4"> 
      <CustomFilter
    etiquetesFilter={etiquetesFilter}
    maxAge={maxAge}
    maxPart={maxPart}
    onQueryChangePart={(newQuery) => {
      setMaxPart((prevState) => {
        const newPart = [...prevState];
        const alreadyHasNewQuery = newQuery.every((element) => {
          return maxPart.some((interval) => interval.includes(element));
        });
  
        if (alreadyHasNewQuery) {
          const index = newPart.indexOf(newQuery);
          newPart.splice(index, 1);
          return newPart;
        } else {
          newPart.push(newQuery);
          return newPart;
        }
      });
    }}
    onQueryChangeEtiquetes={(newQuery) => {
      setEtiquetesFilter((prevState) => {
        const newEtiquetes = [...prevState];
        if (!etiquetesFilter.includes(newQuery)) {
          newEtiquetes.push(newQuery);
          return newEtiquetes;
        } else if (etiquetesFilter.includes(newQuery)) {
          const index = newEtiquetes.indexOf(newQuery);
          newEtiquetes.splice(index, 1);
          return newEtiquetes;
        }
      });
    }}
    onQueryChangeAge={(newQuery) => {
      setMaxAge((prevState) => {
        const newAges = [...prevState];
        if (
          newQuery.every((element) => {
            return (
              maxAge[0]?.includes(element) ||
              maxAge[1]?.includes(element) ||
              maxAge[2]?.includes(element) ||
              maxAge[3]?.includes(element)
            );
          }) === false
        ) {
          newAges.push(newQuery);
          return newAges;
        } else if (
          newQuery.every((element) => {
            return (
              maxAge[0]?.includes(element) ||
              maxAge[1]?.includes(element) ||
              maxAge[2]?.includes(element) ||
              maxAge[3]?.includes(element)
            );
          }) === true
        ) {
          const index = newAges.indexOf(newQuery);
          newAges.splice(index, 1);
          return newAges;
        }
      });
    }}
  /> {filteredFinal.length === 0 ? (
        <NoResults/>
    ) : (
        <ul role="list" className="divide-y divide-gray-200">
          {filteredFinal.map((activity) => (
            <li key={activity.id}>
              <div className="flex my-1 mx-1">
              <Star
                isFilled={favoritesIds.includes(activity.id)}
                id={activity.id}
                onClick={(id) => {
                  return setFavoritesIds((oldFavoritesIds) => {
                    const newFavoritesIds = [...oldFavoritesIds];
                    if (!favoritesIds.includes(activity.id)) {
                      newFavoritesIds.push(activity.id);
                      return newFavoritesIds;
                    } else if (favoritesIds.includes(activity.id)) {
                      const index = favoritesIds.indexOf(activity.id);
                      newFavoritesIds.splice(index, 1);
                      return newFavoritesIds;
                    }
                  });
                }}
              />
              <p className="h-5 w-6 mx-10">
               {(activity.isSong && !activity.isCustom) && <PlayButton id={activity.title}
               />} 
               </p>
               {activity.etiquetes.includes("Custom") && 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 ml-auto" fill="none" onClick={() => onClickDelete(activity.id)} viewBox="0 0 24 24" stroke="black" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>}
              </div>
              <Link
                href={"/activity/" + activity.id}
                className="block hover:bg-gray-50"
              >
                <a>
                  <div className="px-4 py-4 sm:px-6  ">
                    <div className="flex items-center justify-between">
                      <div className="sm:flex bg-">
                        <p className={activity.isSong ? "flex text-sm font-medium text-purple-600 truncate mr-6" : activity.etiquetes.includes("Custom") ? "flex text-sm font-medium text-red-700 truncate mr-6" : activity.isHot ? "flex text-sm font-medium text-amber-600 truncate mr-6" : "flex text-sm font-medium text-indigo-600 truncate mr-6"}>
                          {activity.isSong ? `${activity.title} 🎵`: activity.title}
                        </p>
                        <div className="flex-shrink-0 flex flex-wrap">
                          {activity.etiquetes.map((etiqueta) => (
                            <p
                              key={etiqueta}
                              className={etiqueta != "Custom" ? "px-2 my-2 sm:my-0 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2 my-2 sm:my-0 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"}
                            >
                              {etiqueta}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-800  font-bold">
                            Edats: <p className="mx-2 font-normal ">{activity.edatmin}-{activity.edatmax} </p>
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon
                            className={!activity.etiquetes.includes("Exterior") && !activity.etiquetes.includes("Interior") ? "hidden" : "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"}
                            aria-hidden="true"
                          />
                         {activity.etiquetes.includes("Exterior") && activity.etiquetes.includes("Interior") ? "Exterior/Interior" : (activity.etiquetes.includes("Exterior") ? "Exterior" :(activity.etiquetes.includes("Interior") ? "Interior" : ""))}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        </p>
                      </div>
                      <div className="mt-2 pl-4 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>
                          <time> {activity.descripció} </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul> 
    )}
    </div>
    </div>
  }
  