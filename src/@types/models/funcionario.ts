import Cargo from "./cargo";

export default interface Funcionario {
  id: number;
  nome: string;
  sobrenome: string;
  cargoId: number;
  dataNascimento: string;
  salario: number;
  cargo?: Cargo;
}
