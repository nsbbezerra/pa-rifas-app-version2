import { Route, Switch } from "react-router-dom";

import Index from "../pages";
import NovaRifa from "../pages/newraffleparams";
import Petitions from "../pages/petitions";
import NovaRifaNoParams from "../pages/newraffle";
import Raffles from "../pages/raffles";
import Raffle from "../pages/raffle";

export default function Routing() {
  return (
    <Switch>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/petitions">
        <Petitions />
      </Route>
      <Route path="/newraffle/:r">
        <NovaRifa />
      </Route>
      <Route path="/newraffle">
        <NovaRifaNoParams />
      </Route>
      <Route path={"/raffles"}>
        <Raffles />
      </Route>
      <Route path={"/raffle"}>
        <Raffle />
      </Route>
    </Switch>
  );
}
