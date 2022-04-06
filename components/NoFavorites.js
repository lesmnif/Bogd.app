/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link"

export default function Example() {
    return (
    <Link href="/">
      <button
        type="button"
        className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
  
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 25 25" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
</svg>
        <span className="mt-3 block  text-sm font-medium text-gray-900">No tens Favorits</span>
        <line className= "mt-2 block text-xs font-medium text-gray-800">Ves a afegirne!</line>
      </button>
    </Link>
    
    )
  }
  