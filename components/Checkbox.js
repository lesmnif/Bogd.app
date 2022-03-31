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
import Slider from "./Slider"

export default function Example({Interior, Exterior, onQueryChange, onQueryChangeInt}) {
  return (
    <fieldset className="space-y-3 block w-36 mx-auto ">
      <legend className="sr-only">Notifications</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="Exterior"
            type="checkbox"
            checked={Exterior}
            onChange={onQueryChange}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Exterior
          </label>
          <span id="comments-description" className="text-gray-500">
            <span className="sr-only">New comments </span>
          </span>
        </div>
      </div>
      <div className="relative flex items-start ">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="Interior"
            checked={Interior}
            onChange={onQueryChangeInt}
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            Interior
          </label>
          <span id="candidates-description" className="text-gray-500">
            <span className="sr-only">New candidates </span>
          </span>
        </div>
      </div>
    </fieldset>
  );
}
