/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs = [] }) {

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4 " >
        <li>
          <div>
          <Link href="/" passHref>
            <a className="text-white hover:text-black">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Inici</span>
            </a>
          </Link>
          </div>
        </li>
        {breadcrumbs.map((breadcrumbs) => (
          <li key={breadcrumbs.name ?? 'undefined-key'}>
            <div className="flex items-center">
              <ChevronRightIcon className="flex-shrink-0 h-5 w-5  text-black" aria-hidden="true" />
              <Link
               href={breadcrumbs.href}>
              <a   
                className={breadcrumbs.current ? "ml-4 text-sm font-medium text-white hover:text-black" : " pointer-events-none ml-4 text-sm font-medium  text-gray-300 hover:text-black"}
                aria-current={breadcrumbs.current ? 'page' : undefined}
              >
                {breadcrumbs.name}
              </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
