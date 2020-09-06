import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

import { Container } from "./styles";

import Table from "../../components/Table";

import Funcionario from "../../@types/models/funcionario";

import { ApiPoints } from "../../api";

import { useToast } from "../../hooks/toast";

interface FuncionarioPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

const FuncionarioPage: React.FC<FuncionarioPageProps> = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>();

  const { addToast } = useToast();
  useEffect(() => {
    async function getFuncionarios() {
      try {
        const response = await ApiPoints.getFuncionarios();

        setFuncionarios(response.data);
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro!",
          description: error.response.data.error,
        });
      }
    }
    getFuncionarios();
  }, [addToast]);

  const confirmarDelecaoCargo = async (funcionarioId: number) => {
    if (
      window.confirm("Você tem certeza que deseja deletar esse funcionario ?")
    ) {
      try {
        await ApiPoints.deleteFuncionario(funcionarioId);

        setFuncionarios((funcionarios) =>
          funcionarios?.filter(
            (funcionario) => funcionario.id !== funcionarioId
          )
        );
      } catch (error) {
        addToast({
          title: "Erro!",
          description: error.response.data.error,
          type: "error",
        });
      }
    }
  };

  return (
    <Container>
      <div>
        <h1>Vizualização dos funcionarios cadastrados</h1>
        <Link to="/funcionarios/cadastro">Cadastrar novo funcionario</Link>
      </div>
      {!funcionarios?.length ? (
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
            {funcionarios.map((funcionario) => (
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
