import { ArrowsExpandIcon, MinusIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

export default function HeaderButtons({ title, icon }) {
  return (
    <Fragment>
      <div className="h-16 bg-white shadow-md flex items-start justify-between absolute mt-0 right-0 top-0 left-0">
        <div className="h-full flex items-center px-5 text-green-500">
          <div className="w-5 h-5">{icon}</div>
          <span className="ml-3 font-bold text-lg">{title}</span>
        </div>
        <div className="flex justify-center items-center rounded-bl-lg overflow-hidden">
          <button className="px-2 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-200">
            <MinusIcon className="w-4 h-4" />
          </button>
          <button className="px-2 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-200">
            <ArrowsExpandIcon className="w-4 h-4" />
          </button>
          <button className="px-2 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500">
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
