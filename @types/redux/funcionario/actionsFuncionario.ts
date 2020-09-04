import ActionTypesFuncionario from "./actionTypesFuncionario";
import Action from "../Action";

export interface updateFuncionario {
  (funcionarioId: number): Action<
    ActionTypesFuncionario.UPDATE_FUNCIONARIO,
    { funcionarioId: number }
  >;
}

export default ActionsFuncionario;
