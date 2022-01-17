import { HomeIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import HeaderButtons from "../components/Header";

export default function Index() {
  return (
    <Fragment>
      <HeaderButtons title={"DASHBOARD"} icon={<HomeIcon />} />
    </Fragment>
  );
}
