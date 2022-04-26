/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useRouter } from "next/router";

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

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

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
  console.log("my url is valid",validURL(myURL))

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
        if (
          element.id === "url" &&
          FilledPart.length === 5 &&
          (element.value.length === 0 || "https://www.youtube.com")
        ) {
          FilledPart.push(true);
        }
        console.log("this si ym value for that");
      });
      return FilledPart.length === 5 ? false : true;
    });
  }, [customActivity]);

  const MbSize = selectedFile?.size / 1000000;

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
        aria-required
        className="space-y-8 divide-y divide-gray-200"
      >
        {/* <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
   */}

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
              Petita descripció de l'actitivitat
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
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 m text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span
                        className={
                          isSelected && selectedFile ? "hidden" : " text-base"
                        }
                      >
                        Puja arxiu d'audio
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={changeHandler}
                        className="sr-only"
                        accept="audio/*"
                      />
                      {isSelected && selectedFile && (
                        <div>
                          <p className=" font-bold">Nom de l'arxiu:</p>
                          <p>{selectedFile?.name} </p>
                          <p className=" font-bold">Extensió:</p>
                          <p>{selectedFile?.type}</p>
                          <p className=" font-bold">Tamany:</p>
                          <p>{Math.round(MbSize * 100) / 100} MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                  <p
                    className={
                      isSelected && selectedFile
                        ? "hidden"
                        : "text-xs text-gray-500"
                    }
                  >
                    Audio fins a 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="sm:col-span-1.5">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Edat mínima
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Edat máxima
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1.8">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Participants mínims
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div> */}

            {/* <div className="sm:col-span-6">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div> */}

            {/* <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
  
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>
            </div> */}

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
            <Link href={"/activity/list"}>
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
                      console.log("im going where i have to")
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
