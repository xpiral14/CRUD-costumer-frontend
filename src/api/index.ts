import Axios from "axios";
import Cargo from "../@types/models/cargo";
import Funcionario from "../@types/models/funcionario";
import { CargoFormData } from "../pages/cargo/@types";
import { FuncionarioFormData } from "../pages/funcionario/@types";

// Mude essa linha para a url da api em seu computador
const API_BASE_URL = "http://localhost:1234"

export const api = Axios.create({ baseURL: API_BASE_URL });

export class ApiPoints {
  static async getCargos() {
    const response = await api.get<Cargo[]>("/cargos");
    return response;
  }
  static async getCargoById(cargoId: number) {
    const response = await api.get<Cargo>(`/cargos/${cargoId}`);

    return response;
  }

  static async updateCargo(cargoId: number, newCargo: CargoFormData) {
    const response = await api.put<Cargo>(`/cargos/${cargoId}`, newCargo);

    return response;
  }

  static async deleteCargo(cargoId: number) {
    const response = await api.delete<null>(`/cargos/${cargoId}`);

    return response;
  }

  static async createCargo(cargo: CargoFormData) {
    const response = await api.post<Cargo>(`/cargos`, cargo);

    return response;
  }

  static async getFuncionarios() {
    const response = await api.get<Funcionario[]>("/funcionarios");

    return response;
  }
  static async updateFuncionario(
    funcionarioId: number,
    newFuncionario: FuncionarioFormData
  ) {
    const response = await api.put<Funcionario>(
      `/funcionarios/${funcionarioId}`,
      newFuncionario
    );

    return response;
  }

  static async getFuncionarioById(funcionarioId: number) {
    const response = await api.get<Funcionario>(
      `/funcionarios/${funcionarioId}`
    );
    return response;
  }

  static async deleteFuncionario(funcionarioId: number) {
    const response = await api.delete<null>(`/funcionarios/${funcionarioId}`);

    return response;
  }

  static async createFuncionario(funcionario: FuncionarioFormData) {
    const response = await api.post<Funcionario>(`/funcionarios`, funcionario);

    return response;
  }
}

export default api;
