import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import Home from "../pages/Home";
import CargosPage from "../pages/Cargos";
import InformacaoCargoPage from "../pages/Cargos/informacoes";
import CadastroCargoPage from "../pages/Cargos/cadastro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cargos" exact component={CargosPage} />
        <Route path="/cargos/cadastro" component={CadastroCargoPage} />
        <Route path="/cargos/:id" component={InformacaoCargoPage} />
        <Route path="/funcionarios" component={CargosPage} />
        <Route path="/funcionarios/cadastro" component={CadastroCargoPage} />
        <Route path="/funcionarios/:id" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
