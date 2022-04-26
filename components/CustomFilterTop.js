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
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const filters = [
  {
    id: "ubicació",
    name: "Ubicació",
    options: [
      { value: "Interior", label: "Interior", checked: false },
      { value: "Exterior", label: "Exterior", checked: false },
    ],
  },
  {
    id: "edats",
    name: "Edats",
    options: [
      { value: [4, 7], label: "4-7 anys", checked: false },
      { value: [8, 11], label: "8-11 anys", checked: false },
      { value: [12, 15], label: "12-15 anys", checked: false },
      { value: [16, 18], label: "16-18 anys", checked: false },
    ],
  },
  {
    id: "participants",
    name: "Participants",
    options: [
      { value: [1, 10], label: "1-10 participants", checked: false },
      { value: [11, 20], label: "11-20 participants", checked: false },
      { value: [21, 30], label: "21-30 participants", checked: false },
      { value: [31, 40], label: "31-40 participants", checked: false },
      { value: [41, Infinity], label: "41+ participants", checked: false },
    ],
  },
  {
    id: "etiquetes",
    name: "Etiquetes",
    options: [
      { value: "Custom", label: "Custom", checked: false },
      { value: "Competitiu", label: "Competitiu", checked: false },
      { value: "Cooperatiu", label: "Cooperatiu", checked: false },
      { value: "Coneixença", label: "Coneixença", checked: true },
      { value: "Grans jocs", label: "Grans Jocs", checked: false },
      { value: "Jocs curts", label: "Jocs Curts", checked: false },
      { value: "Jocs de nit", label: "Jocs de Nit", checked: true },
      { value: "Jocs de pistes i gimcanes", label: "Esportiu", checked: false },
      { value: "Esportiu", label: "Esportiu", checked: false },
      { value: "Sense material", label: "Sense material", checked: false },
      {
        value: "Narració i expressió",
        label: "Narració i expressió",
        checked: true,
      },
      { value: "Vetllades", label: "Vetllades", checked: false },
      { value: "Custom", label: "Custom", checked: false },
      { value: "12885", label: "12885 🌎", checked: false },
      { value: "Animació infantil", label: "Animació infantil", checked: false },
      { value: "Danses", label: "Danses", checked: true },
      { value: "Nadales", label: "Nadales", checked: false },
      { value: "Tradicionals", label: "Tradicionals", checked: false },
      { value: "Per anar a dormir", label: "Per anar a dormir", checked: true },
      { value: "Pop rock català", label: "Pop rock català", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  etiquetesFilter,
  maxAge,
  onQueryChangeEtiquetes,
  onQueryChangeAge,
  maxPart,
  onQueryChangePart,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
console.log("this is my maxAge lol", maxAge)
  return (
    <div>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={section.id}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  onChange={(event) => {
                                    if (section.id === "participants") {
                                      onQueryChangePart(option.value);
                                     
                                    } else if (
                                      section.id === "etiquetes" ||
                                      section.id === "ubicació"
                                    ) {
                                      onQueryChangeEtiquetes(
                                        event.target.value
                                      );
                                    } else {
                                      onQueryChangeAge(option.value);
                                    }
                                  }}
                                  checked={
                                    etiquetesFilter.includes(option.value) ||
                                    maxAge.includes(option.value) ||
                                    maxPart.includes(option.value)
                                  }
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block ml-auto">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <label 
          htmlFor="Filters"
          className="hover:cursor-pointer group inline-flex justify-center text-sm font-medium text-gray-700 ">
            Filtres
          </label>
          <button
            id="Filters"
            type="button"
            className="p-2 -m-2 mx-2 text-gray-500 hover:text-gray-700"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filtres</span>
            <FilterIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </main>
    </div>
  );
}
