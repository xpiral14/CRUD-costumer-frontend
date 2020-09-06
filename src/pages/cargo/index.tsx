import React, { useState, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link, RouteComponentProps } from "react-router-dom";

import { Container } from "./styles";

import Table from "../../components/Table";
import Cargo from "../../@types/models/cargo";
import { ApiPoints } from "../../api";

interface CargoPageProps extends RouteComponentProps<any>, React.Props<any> {}

const CargosPage: React.FC<CargoPageProps> = () => {
  const [cargos, setCargos] = useState<Cargo[]>([]);

  useEffect(() => {
    async function getCargos() {
      const response = await ApiPoints.getCargos();

      setCargos(response.data);
    }
    getCargos();
  }, []);

  const confirmarDelecaoCargo = async (cargoId: number) => {
    if (window.confirm("Você tem certeza que deseja deletar o cargo ?")) {
      try {
        await ApiPoints.deleteCargo(cargoId);
        setCargos((cargos) => cargos.filter((c) => c.id !== cargoId));
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Container>
      <div>
        <h1>Vizualização dos cargos cadastrados</h1>
        <Link to="/cargos/cadastro">Cadastrar novo cargo</Link>
      </div>
      {!cargos.length ? (
        <span>Ainda não possui cargos cadastrados</span>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cargos.map((cargo) => (
              <tr key={cargo.id}>
                <td>{cargo.descricao}</td>
                <td>
                  <Link to={`/cargos/${cargo.id}`}>
                    <AiOutlineInfoCircle size={20} color={"#0dceec"} />
                  </Link>

                  <button onClick={() => confirmarDelecaoCargo(cargo.id)}>
                    <BiTrash size={20} color={"#fd3550"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CargosPage as React.FC;
