import { Route, Routes } from "react-router-dom";

import Index from "../pages";
import Petitions from "../pages/petitions";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/petitions" element={<Petitions />} />
    </Routes>
  );
}
