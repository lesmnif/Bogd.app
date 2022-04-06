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
  etiquetes: [],
  isFavorite: "",
};

import { useState } from "react";
import Layout from "../../components/Layout";

export default function Example() {
  const [customActivity, setCustomActivity] = useState(CustomActivity);
  console.log("this is my custom activity", customActivity);
  return (
    <Layout>
      <form className="space-y-8 divide-y divide-gray-200">
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
                    const newCustomActivity = Object.assign({}, prevState);
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
                id="about"
                name="about"
                required
                rows={3}
                value={customActivity.descripció}
                onChange={(event) =>
                  setCustomActivity((prevState) => {
                    const newCustomActivity = Object.assign({}, prevState);
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
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Material
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={customActivity.material}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
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
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Duració{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  value={customActivity.durada}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
                      newCustomActivity.durada = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Objectius
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={customActivity.objectius}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
                      newCustomActivity.objectius = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  autoComplete="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Edat mínima{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="number"
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
                      const newCustomActivity = Object.assign({}, prevState);
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Edat máxima{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  min="4"
                  max="18"
                  value={customActivity.edatmax}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Participants mínims{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  min="1"
                  max="100"
                  value={customActivity.participantsmin}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Participants máxims{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  min="1"
                  max="100"
                  value={customActivity.participantsmax}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
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
                htmlFor="descripció"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Introducció
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  value={customActivity.introducció}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
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
                htmlFor="descripció"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Desenvolupament{" "}
                <p className="inline  text-red-500  text-sm  font-bold">(*)</p>
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  required
                  rows={3}
                  value={customActivity.desenvolupament}
                  onChange={(event) =>
                    setCustomActivity((prevState) => {
                      const newCustomActivity = Object.assign({}, prevState);
                      newCustomActivity.desenvolupament = event.target.value;
                      return newCustomActivity;
                    })
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="descripció"
                  className="block text-sm font-medium text-gray-700 my-2"
                >
                  Avaluació
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={1}
                    value={customActivity.avaluació}
                    onChange={(event) =>
                      setCustomActivity((prevState) => {
                        const newCustomActivity = Object.assign({}, prevState);
                        newCustomActivity.avaluació = event.target.value;
                        return newCustomActivity;
                      })
                    }
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
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
                        id="comments"
                        defaultValue="Interior"
                        name="comments"
                        type="checkbox"
                        onChange={(event) =>
                          setCustomActivity((prevState) => {
                            const myEtiqueta = toString(event.target.value)
                            console.log("this is myetiqueta", myEtiqueta)
                            const newCustomActivity = Object.assign({}, prevState);
                            if (
                              !newCustomActivity.etiquetes.includes(
                                event.target.value
                              )
                            ) {
                              console.log(
                                "this is my comparison",
                                event.target.value === "Interior"
                              );
                              console.log(
                                "this is my pushed array",
                                newCustomActivity.etiquetes.push(
                                  event.target.value
                                )
                              );
                              newCustomActivity.etiquetes.push(
                                event.target.value
                              );
                              console.log(
                                "this is my newCustomActivityarray after i push it",
                                newCustomActivity
                              );
                              console.log("this is my event.target.value", event.target.value)
                              return newCustomActivity;
                            } else if (
                              newCustomActivity.etiquetes.includes(
                                event.target.value
                              )
                            ) {
                              const index = newCustomActivity.etiquetes.indexOf(
                                event.target.value
                              )
                              console.log("this is my index", index)
                              newCustomActivity.etiquetes.splice(index, 1);
                              return newCustomActivity;
                            }
                          })
                        }
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Interior
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700"
                      >
                        Exterior
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Competitiu
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Cooperatiu
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Coneixença
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Grans Jocs
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Jocs Curts
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Jocs de Nit
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Esportiu
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Sense material
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
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
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
