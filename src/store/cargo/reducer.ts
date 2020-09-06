import Cargo from "../../@types/models/cargo";
import ActionTypesCargo from "../../@types/redux/cargo/actions";
import generateRandomId from "../../utils/generateRandom";

const initialState: Cargo[] = [
  { id: 0, descricao: "Lorem ipsum dolor sit." },
  { id: 1, descricao: "Fugiat, dolor quis?" },
  { id: 2, descricao: "Vero sequi nihil dicta" },
];

export default function cargoReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypesCargo.CREATE_CARGO: {
      const cargo = {
        id: generateRandomId(),
        descricao: action.payload.descricaoCargo,
      };
      state = [...state, cargo];
      break;
    }
    case ActionTypesCargo.DELETE_CARGO:
      state = state.filter((cargo) => cargo.id !== action.payload.cargoId);
      break;
    case ActionTypesCargo.UPDATE_CARGO: {
      const cargoIndex = state.findIndex(
        (cargo) => cargo.id === action.payload.cargoId
      );
      if (cargoIndex >= 0)
        state[cargoIndex].descricao = action.payload.descricao;
      break;
    }
    default: {
      break;
    }
  }
  return state;
}
