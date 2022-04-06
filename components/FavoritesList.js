import {
    ClockIcon,
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
  } from "@heroicons/react/solid";
  import Link from "next/link";
  import activitiesData from "../data/activities";
  import { Searcher } from "fast-fuzzy";
  import Toggle from "../components/Toggle";
  import DiscreteSlider from "./Slider";
  import { useEffect, useState } from "react";
  import Checkbox from "../components/Checkbox";
  import Star from "./Star";
  import { render } from "react-dom";
  import Layout from "./Layout";
  import NoFavorites from "../components/NoFavorites"
  import CustomFilter from "../components/CustomFilter"
  import NoResults from "../components/NoResults";
  import { useRouter } from 'next/router'
  
  // Hook
  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }
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
  
  export default function List({ query, setQuerySearch }) {
    const [sliderage, setSliderage] = useState(4);
    const [sliderpart, setSliderpart] = useState(0);
    const [exterior, setExterior] = useState(false);
    const [interior, setInterior] = useState(false);
    const [activities, setActivities] = useState([...activitiesData]);
    const [searcher, setSearcher] = useState(defaultSearcher);
    const [etiquetesFilter, setEtiquetesFilter] = useState([])
    const [maxAge, setMaxAge] = useState([])
    const [maxPart, setMaxPart] = useState([])
    const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", []);
    
    const router = useRouter()

    useEffect(() => {
      const handleStart = (url) => {
        console.log(`Loading: ${url}`)
        setMaxAge([])
        setMaxPart([])
        setEtiquetesFilter([])
        setQuerySearch()
        console.log("this is my query", {query})
  
      }
  
      router.events.on('routeChangeStart', handleStart)
  
      return () => {
        router.events.off('routeChangeStart', handleStart)
      }
    }, [router])

    useEffect(() => {
      const searcher = new Searcher(activities, {
        keySelector: (activity) => {
          return [activity.title, activity.descripció, ...activity.etiquetes];
        },
      });
      setSearcher(searcher);
    }, [activities]);

    
    
    const filtrao = query === "" ? activities : searcher.search(query);
    const filtrito = favoritesIds === "" ? filtrao : filtrao.filter((activity) => favoritesIds.includes(activity.id))
    const filteredAge = maxAge.length === 0 ? filtrito : filtrao.filter((activity) => activity.edatmin >= Math.min(...maxAge) - 4 || activity.edatmax <= Math.max(...maxAge))
    console.log("this is my filteredAge array", filteredAge)
    console.log("this is my maxPart", maxPart)
    const filteredPart = maxPart.length === 0 ? filteredAge : filteredAge.filter((activity) => activity.participantsmin >= Math.min(...maxPart) - 10 || activity.participantsmax <= Math.max(...maxPart))
    console.log("this is my filteredPart array", filteredPart)
    const filteredFinal = etiquetesFilter.length === 0 ? filteredPart : filteredPart.filter((activity) => etiquetesFilter.every((etiqueta) => activity.etiquetes.includes(etiqueta))) 
      
      // var totalIds = activities.filter((activity) => activity.isFavorite === true)
      // .map((activity) => activity.id)
      // console.log("this is my totalIds", totalIds)
  
  
  
    console.log("this is my favoriteIds", favoritesIds)
  
    const hasMounted = useHasMounted();
    if (!hasMounted) {
      return null;
    }
    console.log("this is my filteredfinallength inside favorites", filteredFinal.length)
    return (
    favoritesIds.length === 0 ? <NoFavorites/> :
    filteredFinal.length === 0 ? <NoResults/> :
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
    <div className=" my-4">
        <CustomFilter
            etiquetesFilter={etiquetesFilter}
            maxAge={maxAge}
            maxPart={maxPart}
            onQueryChangePart={(newQuery) => {
              setMaxPart((prevState) =>{
                const newPart = [...prevState]
                if(!maxPart.includes(parseInt(newQuery))){
                  newPart.push(parseInt(newQuery))
                  return newPart
                }
                else if(maxPart.includes(parseInt(newQuery))){
                    const index = newPart.indexOf(newQuery)
                    newPart.splice(index, 1)
                    return newPart
                } 
              })
            }}
            onQueryChangeEtiquetes={(newQuery) => {
              setEtiquetesFilter((prevState) =>{
                const newEtiquetes = [...prevState]
                if(!etiquetesFilter.includes(newQuery)){
                  newEtiquetes.push(newQuery)
                  return newEtiquetes
                }
                else if(etiquetesFilter.includes(newQuery)){
                    const index = newEtiquetes.indexOf(newQuery)
                    newEtiquetes.splice(index, 1)
                    return newEtiquetes 
                } 
              })
            }}
            onQueryChangeAge={(newQuery) => {
              setMaxAge((prevState) =>{
                const newAges = [...prevState]
                if(!maxAge.includes(parseInt(newQuery))){
                  newAges.push(parseInt(newQuery))
                  return newAges
                }
                else if(maxAge.includes(parseInt(newQuery))){
                  const index = newAges.indexOf(newQuery)
                  newAges.splice(index, 1)
                  return newAges
                }
              })
            }}
          />
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {filteredFinal.map((activity) => (
            favoritesIds.includes(activity.id) &&
            <li key={activity.id}>
              <Star
                isFavorite={activity.isFavorite}
                isFilled={favoritesIds.includes(activity.id)}
                id={activity.id} 
                onClick={(id) => {
                  return setFavoritesIds((oldFavoritesIds) => {
                    const newFavoritesIds = [...oldFavoritesIds];
                    if(!favoritesIds.includes(activity.id)){
                       newFavoritesIds.push(activity.id)
                       return newFavoritesIds
                    }
                    else if(favoritesIds.includes(activity.id)){
                      const index = favoritesIds.indexOf(activity.id)
                      newFavoritesIds.splice(index, 1)
                      return newFavoritesIds
                      
                    }
                  })
                }}
                />
              <Link
                href={"/activity/" + activity.id}
                className="block hover:bg-gray-50"
              >
                <a>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="sm:flex">
                        <p className="flex text-sm font-medium text-indigo-600 truncate mr-6">
                          {activity.title}
                        </p>
                        <div className="flex-shrink-0 flex flex-wrap">
                          {activity.etiquetes.map((etiqueta) => (
                            <p
                              key={etiqueta}
                              className="px-2 my-2 sm:my-0 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            >
                              {etiqueta}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <UsersIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {activity.participants}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {activity.espai}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <ClockIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {activity.durada}
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
      </div>
    );
  }
  