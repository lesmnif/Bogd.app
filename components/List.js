import {
  ClockIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import activitiesData from "../data/activities";
import { Searcher } from "fast-fuzzy";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import Star from "./Star";

import CustomFilter from "../components/CustomFilter";
import NoResults from "../components/NoResults";
import { useRouter } from "next/router";

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
export default function List({ query, setQuerySearch }) {
  const [activities, setActivities] = useState([...activitiesData]);
  const [searcher, setSearcher] = useState(defaultSearcher);
  const [etiquetesFilter, setEtiquetesFilter] = useState([]);
  const [maxAge, setMaxAge] = useState([]);
  const [maxPart, setMaxPart] = useState([]);
  const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", []);
  console.log("this is my maxAge", maxAge);
  const router = useRouter();
  console.log("this is my maxPart", maxPart);
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

  const filteredPart =
    maxPart.length === 0
      ? filteredAge
      : filteredAge.filter((activity) => {
          return maxPart.some((partInterval) => {
            return (
              isValueInRange(partInterval, activity.participantsmin) ||
              isValueInRange(partInterval, activity.participantsmax)
            );
          });
        });
  console.log("this is my filteredPart array", filteredPart);
  const filteredFinal =
    etiquetesFilter.length === 0
      ? filteredPart
      : filteredPart.filter((activity) =>
          etiquetesFilter.every((etiqueta) =>
            activity.etiquetes.includes(etiqueta)
          )
        );

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return filteredFinal.length === 0 ? (
    <NoResults />
  ) : (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className=" my-4">
        {/* <Checkbox
          onQueryChange={() => setExterior(!exterior)}
          onQueryChangeInt={() => setInterior(!interior)}
          Interior={interior}
          Exterior={exterior}
        /> */}
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
        />
        {/* <DiscreteSlider
          onQueryChange={(newQuery) => setSliderage(newQuery)}
          onQueryChangePart={(newQuery) => setSliderpart(newQuery)}
          sliderage={sliderage}
          sliderpart={sliderpart}
        /> */}
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {filteredFinal.map((activity) => (
          <li key={activity.id}>
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
