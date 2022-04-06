/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'
import id from '../pages/activity/[id]'
import activities from '../data/activities'
import Star from "./Star"
import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default function Example({activity }) {

  const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", []);

  if (activity === undefined) {
    return null
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
         <Star
              
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
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-xl leading-6 font-medium text-gray-900">{activity.title}</h3>
        <p className="mt-1 max-w-2xl text-xs text-gray-500lea text-"><line className="font-bold text-gray-800" >Duració: </line>{activity.durada} <line className="font-bold text-gray-800 ml-2" >Participants: </line> {activity.participants}<line className="font-bold text-gray-800 ml-2" > Espai: </line>{activity.espai}<line className="font-bold text-gray-800 ml-2"> Edats: </line> {activity.edats}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-gray-900">Descripció</dt>
            <dd className="mt-1 text-sm text-gray-900">{activity.descripció}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-gray-900">Material</dt>
            <dd className="mt-1 text-sm text-gray-900">{activity.material}</dd>
          </div>
          {activity.objectius ? <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-gray-900">Objectius</dt>
            <dd className="mt-1 text-sm text-gray-900">{activity.objectius}</dd>
          </div>
            : <div><div className="sm:col-span-1">
              <dt className="text-sm font-bold text-gray-900">Objectius monitor:</dt>
              <dd className="mt-1 my-2 text-sm text-gray-900">{activity.objectiusMoni}</dd>
            </div><div className="sm:col-span-1">
                <dt className="text-sm font-bold text-gray-900">Objectius infant:</dt>
                <dd className="mt-1 my-2 text-sm text-gray-900">{activity.objectiusInf}</dd>
              </div></div>}
          {/* {activity.objectius && <div>objectius generals</div>}
          {activity.objectiusMoni && <div>objectius moni</div>}
          {activity.objectiusInf && <div>objectius inf</div>} */}
          
          <div className="sm:col-span-2">
            <hr className='my-2 flex ' />
            <dt className="text-sm font-bold text-gray-900">Introducció</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {activity.introducció}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-bold text-gray-900">Desenvolupament</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {activity.desenvolupament}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm mt-2 font-bold text-gray-900">Avaluació</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {activity.avaluació}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
