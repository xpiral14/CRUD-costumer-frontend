import { combineReducers } from "redux";
import cargoReducer from "./cargo/reducer";
import funcionarioReducer from "./funcionario/reducer";
export const rootReducer = combineReducers({ cargos: cargoReducer, funcionarios: funcionarioReducer });
