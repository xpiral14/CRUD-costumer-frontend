import React, { useMemo } from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../components/Table";
import { Link, RouteComponentProps } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { deleteFuncionario } from "../../store/funcionario/actions";

interface FuncionarioPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

const FuncionarioPage: React.FC<FuncionarioPageProps> = () => {
  const funcionarios = useSelector((s) => s.funcionarios);

  const cargos = useSelector((s) => s.cargos);
  const funcionariosCargo = useMemo(
    () =>
      funcionarios.map((funcionario) => ({
        ...funcionario,
        cargo: cargos.find((cargo) => cargo.id === funcionario.cargoId),
      })),
    [cargos, funcionarios]
  );

  const dispatch = useDispatch();

  const confirmarDelecaoCargo = (funcionarioId: number) => {
    if (window.confirm("Você tem certeza que deseja deletar esse funcionario ?")) {
      dispatch(deleteFuncionario(funcionarioId));
    }
  };

  return (
    <Container>
      <div>
        <h1>Vizualização dos funcionarios cadastrados</h1>
        <Link to="/funcionarios/cadastro">Cadastrar novo funcionario</Link>
      </div>
      {!funcionarios ? (
        <span>Ainda não possui funcionarios cadastrados</span>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Cargo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionariosCargo.map((funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.sobrenome}</td>
                <td>{funcionario.cargo?.descricao}</td>
                <td>
                  <Link to={`/funcionarios/${funcionario.id}`}>
                    <AiOutlineInfoCircle size={20} color={"#0dceec"} />
                  </Link>

                  <button onClick={() => confirmarDelecaoCargo(funcionario.id)}>
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

export default FuncionarioPage as React.FC;
