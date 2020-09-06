import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import Home from "../pages/Home";
import CargosPage from "../pages/cargos";
import InformacaoCargoPage from "../pages/cargos/informacoes";
import CadastroCargoPage from "../pages/cargos/cadastro";
import FuncionarioPage from "../pages/funcionarios";
import CadastroFuncionarioPage from "../pages/funcionarios/cadastro";
import InformacaoFuncionarioPage from "../pages/funcionarios/informacoes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cargos" exact component={CargosPage} />
        <Route path="/cargos/cadastro" component={CadastroCargoPage} />
        <Route path="/cargos/:id" component={InformacaoCargoPage} />
        <Route path="/funcionarios" exact component={FuncionarioPage} />
        <Route path="/funcionarios/cadastro" component={CadastroFuncionarioPage} />
        <Route path="/funcionarios/:id" component={InformacaoFuncionarioPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
