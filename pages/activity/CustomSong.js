import { useRouter } from "next/router";
import useGlobalState from "../../components/ListState";
import useGlobalStateHot from "../../components/topState";
import useGlobalStateSongs from "../../components/songsState";



const CustomActivity = {
  id: "",
  title: "",
  descripció: "",
  edatmin: "",
  edatmax: "",
  lletra: "",
  desenvolupament: "",
  avaluació: "",
  url: "",
  etiquetes: ["Custom"],
  isSong: true,
  isCustom: true,
};

import { useEffect, useState } from "react";
import Layout from "../../components/LayoutNoNavbar";
import useLocalStorage from "../../components/useLocalStorage";
import activities from "../../data/activities";
import Link from "next/link";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Router } from "@mui/icons-material";

export default function SongList() {
  const [customActivity, setCustomActivity] = useState(CustomActivity);
  const [localActivities, setLocalActivities] = useLocalStorage(
    "localActivities",
    []
  );
  const [isEnabled, setIsEnabled] = useState(true);
  
  const [maxAge, setMaxAge] = useGlobalState('maxAge')
  const [etiquetesFilter, setEtiquetesFilter] = useGlobalState('etiquetesFilter');
  const [maxPart, setMaxPart] = useGlobalState('maxPart');
  const [maxAgeHot, setMaxAgeHot] = useGlobalStateHot('maxAgeHot')
  const [etiquetesFilterHot, setEtiquetesFilterHot] = useGlobalStateHot('etiquetesFilterHot');
  const [maxPartHot, setMaxPartHot] = useGlobalStateHot('maxPartHot');
  const [maxAgeSongs, setMaxAgeSongs] = useGlobalStateSongs('maxAgeSong')
  const [etiquetesFilterSongs, setEtiquetesFilterSongs] = useGlobalStateSongs('etiquetesFilterSong');
  const [maxPartSongs, setMaxPartSongs] = useGlobalStateSongs('maxPartSong');
  
  
  useEffect(()=>{
    setMaxAge([])
    setEtiquetesFilter([])
    setMaxPart([])
    setMaxAgeHot([])
    setEtiquetesFilterHot([])
    setMaxPartHot([])
    setMaxAgeSongs([])
    setEtiquetesFilterSongs([])
    setMaxPartSongs([])
  },[])


  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  const myURL = customActivity.url

  const handleSubmission = () => {};

  const router = useRouter();

  function onInputChange(event) {
    return setCustomActivity((prevState) => {
      const newCustomActivity = { ...prevState };

      if (!newCustomActivity.etiquetes.includes(event.target.value)) {
        newCustomActivity.etiquetes = [
          ...newCustomActivity.etiquetes,
          event.target.value,
        ];
        return newCustomActivity;
      } else if (newCustomActivity.etiquetes.includes(event.target.value)) {
        newCustomActivity.etiquetes = newCustomActivity.etiquetes.filter(
          (etiqueta) => etiqueta !== event.target.value
        );
        return newCustomActivity;
      }
    });
  }
  useEffect(() => {
    setIsEnabled(() => {
      const form = document.getElementById("my-form");
      const FilledPart = [];
      Array.from(form.elements).forEach((element) => {
        if (element.required === true) {
          if (element.value.length != 0) {
            if (
              (element.id === "edatmin" || element.id === "edatmax") &&
              parseInt(element.value) >= 4 &&
              parseInt(element.value) <= 18
            ) {
              FilledPart.push(true);
          
            } else if (
              (element.id === "partmin" || element.id === "partmax") &&
              parseInt(element.value) >= 1 &&
              parseInt(element.value) <= 100
            ) {
              FilledPart.push(true);
         
            } else if (element.type === "text" || element.type === "textarea") {
              FilledPart.push(true);
            }
          }
        
        }
        if (
          element.id === "url" &&
          FilledPart.length === 5 &&
          (element.value.length === 0 || "https://www.youtube.com")
        ) {
          FilledPart.push(true);
        }
       
      });
      return FilledPart.length === 5 ? false : true;
    });
  }, [customActivity]);



  return (
    <Layout
      breadcrumbs={[
        { name: "Cançoner", href: "/activity/songs", current: true },
        { name: "Crear cançó", href: "activity/list", current: false },
      ]}
      titol="Crear cançó"
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        id="my-form"
        className="space-y-8 divide-y divide-gray-200"
      >
        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4 ">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 my-1"
              >
                Títol{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={customActivity.title}
                onChange={(event) =>
                  setCustomActivity((prevState) => {
                    const newCustomActivity = { ...prevState };
                    newCustomActivity.title = event.target.value;
                    return newCustomActivity;
                  })
                }
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="descripció"
              className="block text-sm font-medium text-gray-700 my-2"
            >
              Descripció{" "}
              <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                id="about"
                name="about"
                required
                rows={3}
                value={customActivity.descripció}
                onChange={(event) =>
                  setCustomActivity((prevState) => {
                    const newCustomActivity = { ...prevState };
                    newCustomActivity.descripció = event.target.value;
                    return newCustomActivity;
                  })
                }
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Petita descripció de l&apos;actitivitat
            </p>
          </div>
        </div>

        <div className="pt-8">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="edatmin"
                className="block text-sm font-medium text-gray-700"
              >
                Edat mínima{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="edatmin"
                  name="number"
                  type="number"
                  placeholder="Entre 4-18"
                  required
                  min="4"
                  max="18"
                  value={customActivity.edatmin}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.edatmin = parseInt(event.target.value);
                      return newCustomActivity;
                    })
                  }
                  autoComplete="number"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="edatmax"
                className="block text-sm font-medium text-gray-700"
              >
                Edat máxima{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="edatmax"
                  name="number"
                  type="number"
                  required
                  min="4"
                  max="18"
                  value={customActivity.edatmax}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.edatmax = parseInt(event.target.value);
                      return newCustomActivity;
                    })
                  }
                  placeholder="Entre 4-18"
                  autoComplete="number"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className=" sm:col-span-3">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Youtube Url{" "}
              </label>
              <div className="mt-1">
                <input
                  id="url"
                  name="text"
                  type="url"
                  value={customActivity.url}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.url = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="lletra"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Lletra
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  rows={3}
                  id="lletra"
                  name="about"
                  value={customActivity.lletra}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.lletra = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="desenvolupament"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Desenvolupament{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  id="desenvolupament"
                  name="about"
                  required
                  rows={3}
                  value={customActivity.desenvolupament}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.desenvolupament = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="avaluació"
                  className="block text-sm font-medium text-gray-700 my-2"
                >
                  Avaluació
                </label>
                <div className="mt-1 mb-10">
                  <textarea
                    type="text"
                    id="avaluació"
                    name="about"
                    rows={1}
                    value={customActivity.avaluació}
                    onChange={(event) =>
                      setCustomActivity((prevState) => {
                        const newCustomActivity = { ...prevState };
                        newCustomActivity.avaluació = event.target.value;
                        return newCustomActivity;
                      })
                    }
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 ">
              <fieldset className="">
                <legend className="text-base font-medium text-gray-900">
                  Etiquetes
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Animació infantil"
                        value="Animació infantil"
                        name="comments"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Animació infantil"
                        className="font-medium text-gray-700"
                      >
                        Animació infantil
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        value="Danses"
                        id="Danses"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Danses"
                        className="font-medium text-gray-700"
                      >
                        Danses
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Nadales"
                        name="Nadales"
                        value="Nadales"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Nadales"
                        className="font-medium text-gray-700"
                      >
                        Nadales
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Tradicionals"
                        name="Tradicionals"
                        value="Tradicionals"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Tradicionals"
                        className="font-medium text-gray-700"
                      >
                        Tradicionals
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Per anar a dormir"
                        name="Per anar a dormir"
                        type="checkbox"
                        value="Per anar a dormir"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Per anar a dormir"
                        className="font-medium text-gray-700"
                      >
                        Per anar a dormir
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link href={"/activity/list"} passHref>
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel·la
              </button>
            </Link>
            
            <button
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 disabled:bg-slate-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() =>
                setLocalActivities((prevState) => {
                  if (isEnabled === false) {
                    if (customActivity.edatmin >= customActivity.edatmax) {
                      toast.error("L'edat mínima ha de ser menor a la màxima.");
                      const newActivities = [...prevState];
                      return newActivities;
                    } 
                    else if(customActivity.url){ 
                      if(!validURL(myURL)){
                        const newActivities = [...prevState];
                        return newActivities;
                      }
                      else{
                        const newActivities = [...prevState];
                        customActivity.id =
                          activities.length + 1 + localActivities.length;
                        customActivity.url = customActivity.url.slice(-11);
                        newActivities.push(customActivity);
                        router.push(`/activity/${customActivity.id}`);
                        toast.success("Activitat guardada! 🔥");
                        return newActivities;

                      }
                  }
                    else {
                      const newActivities = [...prevState];
                      customActivity.id =
                        activities.length + 1 + localActivities.length;
                      customActivity.url = customActivity.url.slice(-11);
                      newActivities.push(customActivity);
                      router.push(`/activity/${customActivity.id}`);
                      toast.success("Activitat guardada! 🔥");
                      return newActivities;
                    }
                  }   else {
                    const newActivities = [...prevState];
                    return newActivities;
                  }
                })
              }
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
