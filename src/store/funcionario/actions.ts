import ActionsFuncionario from "../../@types/redux/funcionario/actions";
import { FuncionarioFormData } from "../../pages/funcionarios/@types";

export function createFuncionario(funcionarioFormData: FuncionarioFormData) {
  return {
    type: ActionsFuncionario.CREATE_FUNCIONARIO,
    payload: {
      funcionarioFormData,
    },
  };
}
export function deleteFuncionario(funcionarioId: number) {
  return {
    type: ActionsFuncionario.DELETE_FUNCIONARIO,
    payload: {
      funcionarioId,
    },
  };
}
export function updateFuncionario(
  funcionarioId: number,
  funcionarioFormData: FuncionarioFormData
) {
  funcionarioFormData.cargoId = +funcionarioFormData.cargoId;
  return {
    type: ActionsFuncionario.UPDATE_FUNCIONARIO,
    payload: {
      funcionarioId,
      funcionarioFormData,
    },
  };
}
