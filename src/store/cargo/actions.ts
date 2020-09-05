import Cargo from "../../@types/models/cargo";
import ActionTypesCargo from "../../@types/redux/cargo/actionTypesCargo";

export function createCargo(descricaoCargo: string) {
  console.log(descricaoCargo)
  return {
    type: ActionTypesCargo.CREATE_CARGO,
    payload: {
      descricaoCargo,
    },
  };
}
export function deleteCargo(cargoId: number) {
  return {
    type: ActionTypesCargo.DELETE_CARGO,
    payload: {
      cargoId,
    },
  };
}
export function updateCargo(cargoId: number, descricao: string) {
  return {
    type: ActionTypesCargo.UPDATE_CARGO,
    payload: {
      cargoId,
      descricao,
    },
  };
}
