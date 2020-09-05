import Cargo from "../models/cargo";
import Funcionario from "../models/funcionario";

declare module "react-redux" {
  interface DefaultRootState {
    cargos: Cargo[];
    funcionarios: Funcionario[];
  }
}
