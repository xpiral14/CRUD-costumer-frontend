import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import FuncionarioForm from "../../../components/FuncionarioForm";
import Funcionario from "../../../@types/models/funcionario";
import { FuncionarioFormData } from "../@types";
import { ApiPoints } from "../../../api";
import { useToast } from "../../../hooks/toast";

interface InformacaoFuncionarioPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

const InformacaoFuncionarioPage: React.FC<InformacaoFuncionarioPageProps> = (
  props
) => {
  const [funcionario, setFuncionario] = useState<Funcionario>();

  useEffect(() => {
    async function getFuncionario() {
      try {
        const response = await ApiPoints.getFuncionarioById(
          props.match.params.id
        );

        if (!response.data) {
          props.history.push("/funcionarios");
        }
        setFuncionario(response.data);
      } catch (error) {
        props.history.push("/funcionarios");
      }
    }
    getFuncionario();
  }, [props.history, props.match.params.id]);
  const { register, handleSubmit } = useForm<FuncionarioFormData>();
  const { addToast } = useToast();

  const onSubmit = async (data: FuncionarioFormData) => {
    try {
      await ApiPoints.updateFuncionario(props.match.params.id, data);
      addToast({
        type: "success",
        title: "Sucesso!",
        description: "Funcionário atualizado com sucesso!",
      });
    } catch (error) {
      addToast({
        type: "error",
        title: "Erro!",
        description: error.response.data,
      });
    }
    props.history.push("/funcionarios");
  };

  return (
    <Container>
      {!funcionario ? (
        <h2>Carregando</h2>
      ) : (
        <>
          <h2>
            Informações sobre
            {` ${funcionario.nome} ${funcionario.sobrenome}  ${funcionario.cargoId}`}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FuncionarioForm
              inputRefs={{
                cargoRef: register,
                dataNascimentoRef: register,
                nomeRef: register,
                salarioRef: register,
                sobrenomeRef: register,
              }}
              funcionario={funcionario}
            />
            <Button type="submit" btnTheme="success">
              Salvar
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};

export default InformacaoFuncionarioPage as React.FC;
