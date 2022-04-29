import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import activities from "../data/activities";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image"

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Bogd.app", href: "/activity/CustomActivity", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({
  children,
  onQueryChange,
  query,
  breadcrumbs = [],
  titol
}) {
  return (
    <div className="min-h-full">
      <div className="bg-indigo-600 pb-32">
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
                      alt="Workflow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 mx-auto">
              <h3 className="text-2xl font-bold text-white sm:text-3xl mb-5"> {titol} </h3>
                {breadcrumbs.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs}/>}
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
