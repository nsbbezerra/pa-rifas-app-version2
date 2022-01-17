import { HomeIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import HeaderButtons from "../components/Header";

import Logo from "../assets/logo.png";

export default function Index() {
  return (
    <Fragment>
      <HeaderButtons title={"DASHBOARD"} icon={<HomeIcon />} />

      <div className="flex justify-center items-center pt-32 px-3">
        <img src={Logo} alt="PA Rifas" className="w-2/5 block" />
      </div>
    </Fragment>
  );
}
