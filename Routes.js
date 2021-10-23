import React from "react";
import { Route, Switch } from "react-router-dom";

import Inicio from "./components/Inicio";
import Stock from "./components/Stock";
import Venta from "./components/Venta";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Inicio} />
    <Route exact path="/login" component={Stock} />
    <Route exact path="/signup" component={Venta} />

  </Switch>
);

export default Routes;