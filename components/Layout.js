import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import activities from "../data/activities"
import Breadcrumbs from "../components/Breadcrumbs"
import Image from "next/image";



const navigation = [
  { name: "Crear activitat", href: "/activity/CustomActivity", current: false },
  { name: "Activitats preferides", href: "/activity/favorites", current: false },
  { name: "Tendències", href: "/activity/topgames", current: false },
  { name: "Cançoner", href: "/activity/songs", current: false },
  { name: "Crear cançó", href: "/activity/CustomSong", current: false },
  { name: "Desestressador", href: "/activity/desestressador", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Layout({ children, onQueryChange, isHidden, titol, query, breadcrumbs = [] }) {

  
  return ( 
     <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure as="nav" className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                  <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="px-2 flex items-center lg:px-0">
                      <div className="flex-shrink-0">
                        <Link href="/">
                          <a>
                            <Image
                                width={40}
                                height={40}
                                className="block h-10 w-10 "
                                src="/SimpleLog.png"
                                alt="LogoApp"
                              />
                          </a>
                        </Link>
                      </div>
                      <div className="hidden lg:block lg:ml-10">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                'rounded-md py-2 px-3 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {!isHidden && <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                      <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <input
                            id={activities.id}
                            className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                            placeholder="Search"
                            type="Search"
                            name="searchbar"
                            value={query}
                            onChange={(event) => {
                              onQueryChange(event.target.value)
                            }}
                          />
                          
                        </div>
                      </div>
                    </div>}
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                      <div className="flex items-center">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative flex-shrink-0">
                          <div>
                            <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-700 text-white'
                            : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-indigo-700">
                    <div className="px-5 flex items-center">
                      <div className="flex-shrink-0">
                      </div>
                      <div className="ml-3">
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 mx-auto">
              <h3 className= "text-2xl font-bold text-white sm:text-3xl mb-5"> {titol} </h3>
                {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}
              </div>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              {/* <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"> */}
              {children}
              {/* </div> */}
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
  );
}
