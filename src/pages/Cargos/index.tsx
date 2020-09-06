import React from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../components/Table";
import { Link, RouteComponentProps } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { deleteCargo } from "../../store/cargo/actions";

interface CargoPageProps extends RouteComponentProps<any>, React.Props<any> {}

const CargosPage: React.FC<CargoPageProps> = () => {
  
  const cargos = useSelector((s) => s.cargos);
  const dispatch = useDispatch();

  const confirmarDelecaoCargo = (cargoId: number) => {
    if (window.confirm("Você tem certeza que deseja deletar o cargo ?")) {
      dispatch(deleteCargo(cargoId));
    }
  };

  return (
    <Container>
      <div>
        <h1>Vizualização dos cargos cadastrados</h1>
        <Link to="/cargos/cadastro">Cadastrar novo cargo</Link>
      </div>
      {!cargos ? (
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
