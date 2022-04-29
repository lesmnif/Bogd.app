import { useRouter } from "next/router";

const CustomActivity = {
  id: "",
  title: "",
  descripció: "",
  participants: "",
  edats: "",
  espai: "",
  durada: "",
  edatmin: "",
  edatmax: "",
  participantsmin: "",
  participantsmax: "",
  objectius: "",
  material: "",
  introducció: "",
  desenvolupament: "",
  avaluació: "",
  etiquetes: ["Custom"],
  isCustom: true,
};

import { useEffect, useState } from "react";
import Layout from "../../components/LayoutNoNavbar";
import useLocalStorage from "../../components/useLocalStorage";
import activities from "../../data/activities";
import Link from "next/link";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { PausePresentation, Router } from "@mui/icons-material";
import useGlobalState from '../../components/ListState';


export default function Example() {
  const [customActivity, setCustomActivity] = useState(CustomActivity);
  const [localActivities, setLocalActivities] = useLocalStorage(
    "localActivities",
    []
  );
  const [isEnabled, setIsEnabled] = useState(true);
  

  const [maxAge, setMaxAge] = useGlobalState('maxAge')
  const [etiquetesFilter, setEtiquetesFilter] = useGlobalState('etiquetesFilter');
  const [maxPart, setMaxPart] = useGlobalState('maxPart');
  
  useEffect(()=>{
    setMaxAge([])
    setEtiquetesFilter([])
    setMaxPart([])
  },[])
  const router = useRouter();

  console.log("this ismy localACtivity", localActivities);
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
  console.log("this is my newCustomActivity", customActivity)
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
              console.log("im entering there bro");
            } else if (
              (element.id === "partmin" || element.id === "partmax") &&
              parseInt(element.value) >= 1 &&
              parseInt(element.value) <= 100
            ) {
              FilledPart.push(true);
              console.log("im entering the part thing lol");
            } else if (element.type === "text" || element.type === "textarea") {
              FilledPart.push(true);
            }
          }
          console.log("this is ym FilledPart", FilledPart);
        }
      });
      return FilledPart.length === 8 ? false : true;
    });
  }, [customActivity]);



  console.log("this is my enabled", isEnabled);
  return (
    <Layout breadcrumbs={[
      { name: "Jocs", href: "/activity/list", current: true},
      { name: "Crear activitat", href: "activity/list", current: false},
    ]} titol="Crear activitat">
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
            <div className="sm:col-span-3">
              <label
                htmlFor="Material"
                className="block text-sm font-medium text-gray-700"
              >
                Material
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="Material"
                  id="Material"
                  value={customActivity.material}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.material = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Durada"
                className="block text-sm font-medium text-gray-700"
              >
                Duració{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="Durada"
                  id="Durada"
                  required
                  value={customActivity.durada}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.durada = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="Objectius"
                className="block text-sm font-medium text-gray-700"
              >
                Objectius
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="Objectius"
                  id="Objectius"
                  value={customActivity.objectius}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.objectius = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
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
                  aria-required={true}
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
            <div className="sm:col-span-1">
              <label
                htmlFor="partmin"
                className="block text-sm font-medium text-gray-700"
              >
                Participants mínims{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="partmin"
                  name="number"
                  type="number"
                  required
                  min="1"
                  max="100"
                  value={customActivity.participantsmin}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.participantsmin = parseInt(
                        event.target.value
                      );
                      return newCustomActivity;
                    })
                  }
                  placeholder="Entre 1-100"
                  autoComplete="number"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="partmax"
                className="block text-sm font-medium text-gray-700"
              >
                Participants máxims{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="partmax"
                  name="number"
                  type="number"
                  required
                  min="1"
                  max="100"
                  value={customActivity.participantsmax}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.participantsmax = parseInt(
                        event.target.value
                      );
                      return newCustomActivity;
                    })
                  }
                  placeholder="Entre 1-100"
                  autoComplete="number"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="introducció"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Introducció
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  id="introducció"
                  name="about"
                  value={customActivity.introducció}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = { ...prevState };
                      newCustomActivity.introducció = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  rows={1}
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
                <div className="mt-1">
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
                        id="Interior"
                        value="Interior"
                        name="comments"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Interior"
                        className="font-medium text-gray-700"
                      >
                        Interior
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        value="Exterior"
                        id="Exterior"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Exterior"
                        className="font-medium text-gray-700"
                      >
                        Exterior
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Competitiu"
                        name="offers"
                        value="Competitiu"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Competitiu"
                        className="font-medium text-gray-700"
                      >
                        Competitiu
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Cooperatiu"
                        name="offers"
                        value="Cooperatiu"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Cooperatiu"
                        className="font-medium text-gray-700"
                      >
                        Cooperatiu
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Coneixença"
                        name="offers"
                        type="checkbox"
                        value="Coneixença"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Coneixença"
                        className="font-medium text-gray-700"
                      >
                        Coneixença
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Grans Jocs"
                        name="offers"
                        value="Grans Jocs"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Grans Jocs"
                        className="font-medium text-gray-700"
                      >
                        Grans Jocs
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Jocs Curts"
                        name="offers"
                        type="checkbox"
                        value="Jocs Curts"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Jocs Curts"
                        className="font-medium text-gray-700"
                      >
                        Jocs Curts
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Jocs de Nit"
                        name="offers"
                        value="Jocs de Nit"
                        type="checkbox"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Jocs de Nit"
                        className="font-medium text-gray-700"
                      >
                        Jocs de Nit
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Esportiu"
                        name="offers"
                        type="checkbox"
                        value="Esportiu"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Esportiu"
                        className="font-medium text-gray-700"
                      >
                        Esportiu
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Sense material"
                        name="offers"
                        type="checkbox"
                        value="Sense material"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Sense material"
                        className="font-medium text-gray-700"
                      >
                        Sense material
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Narració i expressió"
                        name="offers"
                        type="checkbox"
                        value="Narració i expressió"
                        onChange={onInputChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="Narració i expressió"
                        className="font-medium text-gray-700"
                      >
                        Narració i expressió
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                  <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset> */}
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
            {/* {console.log("this is my function value",  */}

            {/* {console.log("this is my value lol", checkFilled)} */}

            <button
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 disabled:bg-slate-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() =>
                setLocalActivities((prevState) => {
                  if (isEnabled === false) {
                    if (customActivity.edatmin >= customActivity.edatmax){
                      toast.error(`L'edat mínima ha de ser menor a la màxima.`)
                      const newActivities = [...prevState];
                      return newActivities;
                  }
                  else if (customActivity.participantsmin >= customActivity.participantsmax){
                      toast.error("Els participants mínims han de ser menors als màxims.")
                      const newActivities = [...prevState];
                      return newActivities;
                  }
                  else{
                    const newActivities = [...prevState];
                    customActivity.id =
                      activities.length + 1 + localActivities.length;
                    newActivities.push(customActivity);
                    router.push(`/activity/${customActivity.id}`);
                    toast.success("Activitat guardada! 🔥");
                    return newActivities;
                    }
                  } else {
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
