import Funcionario from "../../@types/models/funcionario";
import ActionFuncionario from "../../@types/redux/funcionario/actions";
import generateRandomId from "../../utils/generateRandom";
const initialState: Funcionario[] = [
  {
    cargoId: 0,
    id: 0,
    dataNascimento: "1999-09-22",
    nome: "Samuel",
    salario: 2822.23,
    sobrenome: "Reis",
  },
  {
    cargoId: 1,
    id: 1,
    dataNascimento: "1999-09-22",
    nome: "Samuel",
    salario: 2822.23,
    sobrenome: "Reis",
  },
  {
    cargoId: 2,
    id: 2,
    dataNascimento: "1999-09-22",
    nome: "Samuel",
    salario: 2822.23,
    sobrenome: "Reis",
  },
];
export default function funcionarioReducer(
  state: Funcionario[] | undefined = initialState,
  { type, payload }: { type: ActionFuncionario; payload: any }
) {
  switch (type) {
    case ActionFuncionario.CREATE_FUNCIONARIO: {
      const funcionario = {
        id: generateRandomId(),
        ...payload.funcionarioFormData,
      };

      state = [...state, funcionario];
      break;
    }
    case ActionFuncionario.DELETE_FUNCIONARIO: {
      state = state?.filter(
        (funcionario) => funcionario.id !== payload.funcionarioId
      );
      break;
    }

    case ActionFuncionario.UPDATE_FUNCIONARIO: {
      const funcionarioIndex = state.findIndex(
        (funcionario) => funcionario.id === payload.funcionarioId
      );
  
      if (funcionarioIndex >= 0)
        state[funcionarioIndex] = {
          ...state[funcionarioIndex],
          ...payload.funcionarioFormData,
        };

      break;
    }

    default:
      break;
  }
  return state;
}
