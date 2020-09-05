import Cargo from "../models/cargo";
import Funcionario from "../models/funcionario";

export default interface State {
  cargos: Cargo[];
  funcionarios: Funcionario[];
}
