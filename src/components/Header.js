import { Fragment } from "react";

export default function HeaderButtons({ title, icon }) {
  return (
    <Fragment>
      <div className="h-16 bg-white shadow-md flex items-start justify-between absolute mt-0 right-0 top-0 left-0 z-50">
        <div className="h-full flex items-center px-5 text-green-500">
          <div className="w-5 h-5">{icon}</div>
          <span className="ml-3 font-bold text-lg">{title}</span>
        </div>
      </div>
    </Fragment>
  );
}
