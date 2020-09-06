import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import Home from "../pages/home";
import CargosPage from "../pages/cargo";
import InformacaoCargoPage from "../pages/cargo/informacoes";
import CadastroCargoPage from "../pages/cargo/cadastro";
import FuncionarioPage from "../pages/funcionario";
import CadastroFuncionarioPage from "../pages/funcionario/cadastro";
import InformacaoFuncionarioPage from "../pages/funcionario/informacoes";

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
