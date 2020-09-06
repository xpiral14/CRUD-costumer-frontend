
import ActionTypesCargo from "../../@types/redux/cargo/actions";

export function createCargo(descricaoCargo: string) {

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
