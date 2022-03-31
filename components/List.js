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

export default function List({ query }) {
  const [sliderage, setSliderage] = useState(4);
  const [sliderpart, setSliderpart] = useState(0);
  const [exterior, setExterior] = useState(false);
  const [interior, setInterior] = useState(false);
  const [activities, setActivities] = useState([...activitiesData]);
  const [searcher, setSearcher] = useState(defaultSearcher);
  const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", "");

  useEffect(() => {
    const searcher = new Searcher(activities, {
      keySelector: (activity) => {
        return [activity.title, activity.descripció, ...activity.etiquetes];
      },
    });
    setSearcher(searcher);
  }, [activities]);

  const filtrao = query === "" ? activities : searcher.search(query);
  const filteredAge = filtrao.filter(
    (activity) => activity.edatmin >= sliderage
  );
  const filteredPart = filteredAge.filter(
    (activity) => activity.participantsmin >= sliderpart
  );
  const filteredExt = exterior
    ? filteredPart.filter((activity) => activity.etiquetes.includes("Exterior"))
    : filteredPart;
  const filteredFinal = interior
    ? filteredExt.filter((activity) => activity.etiquetes.includes("Interior"))
    : filteredExt;
    
    
    // var totalIds = activities.filter((activity) => activity.isFavorite === true)
    // .map((activity) => activity.id)
    // console.log("this is my totalIds", totalIds)
    
    let favorites = favoritesIds
    console.log("this is the result of my function",favoritesIds.includes(activities[0].id))
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].isFavorite === true) {
          if(!favoritesIds.includes(activities[i].id)){
            {
              console.log(activities[i].isFavorite)
              favorites.push(activities[i].id);
            }
          }
        }
    }
  
    useEffect(() => {
    
    console.log("this is my favorites before setting it", favorites)
    setFavoritesIds(favorites);
  }, [activities]);

  console.log("this is my favoriteIds", favoritesIds)

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <Checkbox
        onQueryChange={() => setExterior(!exterior)}
        onQueryChangeInt={() => setInterior(!interior)}
        Interior={interior}
        Exterior={exterior}
      />
      <DiscreteSlider
        onQueryChange={(newQuery) => setSliderage(newQuery)}
        onQueryChangePart={(newQuery) => setSliderpart(newQuery)}
        sliderage={sliderage}
        sliderpart={sliderpart}
      />
      <ul role="list" className="divide-y divide-gray-200">
        {filteredFinal.map((activity) => (
          <li key={activity.id}>
            <pre>{activity.id} is in {JSON.stringify(favoritesIds)}? {JSON.stringify(favoritesIds.includes(activity.id))}</pre>
            <Star
              isFavorite={activity.isFavorite}
              isFilled={favoritesIds.includes(activity.id)}
              id={activity.id}
              onClick={(id) => {
                return setActivities((oldActivities) => {
                  const newActivities = [...oldActivities];
                  newActivities[activity.id - 1] = {
                    ...newActivities[activity.id - 1],
                    isFavorite: !newActivities[activity.id - 1].isFavorite,
                  }
                  return newActivities;
                });
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
