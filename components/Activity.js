/* This example requires Tailwind CSS v2.0+ */
import Star from "./Star";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import ReactAudioPlayer from "react-audio-player";
import ResponsiveEmbed from "./ResponsiveEmbed";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default function Example({ activity, onClickDelete }) {
  const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", []);

  if (activity === undefined) {
    return null;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="flex mt-2 mx-2">
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
        {(activity.isSong && !activity.isCustom) && <ReactAudioPlayer className="h-5 ml-auto"src={`/songs/${activity.title}.mp3`} controls />}
        {activity.etiquetes.includes("Custom") && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6 ml-auto"
            fill="none"
            onClick={onClickDelete}
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        )}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-xl leading-6 font-medium text-gray-900">
          {activity.isSong ? `${activity.title} 🎵` : activity.title}
        </h3>
        
        <p className="mt-1 max-w-2xl text-xs text-gray-500lea text-">
          <line className={activity.isSong && "hidden"}>
            <line className="font-bold text-gray-800">Duració: </line>
            {activity.durada}{" "}
            <line className="font-bold text-gray-800 ml-2">Participants: </line>{" "}
            {activity.participantsmin}-{activity.participantsmax}
          </line>
          <line
            className={
              !activity.etiquetes.includes("Exterior") &&
              !activity.etiquetes.includes("Interior")
                ? "hidden"
                : "font-bold text-gray-800 ml-2"
            }
          >
            {" "}
            Espai:{" "}
          </line>{" "}
          {activity.etiquetes.includes("Exterior") &&
          activity.etiquetes.includes("Interior")
            ? "Exterior/Interior"
            : activity.etiquetes.includes("Exterior")
            ? "Exterior"
            : activity.etiquetes.includes("Interior")
            ? "Interior"
            : ""}
          <line className="font-bold text-gray-800 ml-2"> Edats: </line>{" "}
          {activity.edatmin === 18 && activity.edatmax === 18
            ? "Monitors"
            : `${activity.edatmin}-${activity.edatmax}`}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className={activity.url ? "grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2" : "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"}>
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-gray-900">Descripció:</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {activity.descripció}
            </dd>
          </div>
          <div className="sm:col-span-1 ">
            <div>
              <dt className="text-sm font-bold text-gray-900">{activity.material ? "Material" : ""}</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {activity.material ? activity.material : ""}
              </dd>
            </div>
          </div>
          {activity.url && <ResponsiveEmbed youtubeId={activity.url}/>}
          {activity.objectius ? (
            <div className="sm:col-span-1">
              <dt className="text-sm font-bold text-gray-900">Objectius:</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {activity.objectius}
              </dd>
            </div>
          ) : (
            <div
              className={
                !activity.objectiusMoni && !activity.objectiusMoni
                  ? "hidden"
                  : ""
              }
            >
              <div className="sm:col-span-1">
                <dt className="text-sm font-bold text-gray-900">
                  Objectius monitor:
                </dt>
                <dd className="mt-1 my-2 text-sm text-gray-900">
                  {activity.objectiusMoni}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-bold text-gray-900">
                  Objectius infant:
                </dt>
                <dd className="mt-1 my-2 text-sm text-gray-900">
                  {activity.objectiusInf}
                </dd>
              </div>
            </div>
          )}
          {/* {activity.objectius && <div>objectius generals</div>}
          {activity.objectiusMoni && <div>objectius moni</div>}
          {activity.objectiusInf && <div>objectius inf</div>} */}

          <div className="sm:col-span-2">
            <hr className="my-2 flex " />
            <dt className="text-sm font-bold text-gray-900">
              {activity.isSong
                ? activity.lletra
                  ? "Lletra:"
                  : ""
                : activity.introducció
                ? "Introducció:"
                : ""}
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {activity.isSong ? (
                <div className=" whitespace-pre">{activity.lletra}</div>
              ) : activity.introducció ? (
                activity.introducció
              ) : (
                ""
              )}
            </dd>
          </div>
          {activity.desenvolupament && (
            <div className="sm:col-span-2">
              <dt className="text-sm font-bold text-gray-900">
                Desenvolupament:
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {activity.desenvolupament}
              </dd>
            </div>
          )}
          <div className={activity.avaluació ? "sm:col-span-2" : "hidden"}>
            <dt className="text-sm mt-2 font-bold text-gray-900">Avaluació:</dt>
            <dd className="mt-1 text-sm text-gray-900">{activity.avaluació}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
