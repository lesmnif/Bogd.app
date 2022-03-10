import { ClockIcon, CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import activities from '../data/activities'


export default function Example() {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <Link href={'/activity/' + activity.id} className="block hover:bg-gray-50">
                            <a>
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="sm:flex">
                                            <p className="flex text-sm font-medium text-indigo-600 truncate mr-6">{activity.title}</p>
                                            <div className="flex-shrink-0 flex flex-wrap">
                                                {activity.etiquetes.map((etiqueta) => (
                                                    <p className="px-2 my-2 sm:my-0 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {etiqueta}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">

                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                {activity.participants}
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                {activity.espai}
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                {activity.durada}
                                            </p>
                                        </div>
                                        <div className="mt-2 pl-4 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <p>
                                                <time> {activity.descripció} </time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}