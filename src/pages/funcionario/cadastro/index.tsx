import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container } from "./styles";

import Button from "../../../components/Button";
import FuncionarioForm from "../../../components/FuncionarioForm";

import { FuncionarioFormData } from "../@types";

import { ApiPoints } from "../../../api";

import { useToast } from "../../../hooks/toast";

interface InformacaoCargoPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

const CadastroFuncionarioPage: React.FC<InformacaoCargoPageProps> = (props) => {
  // obtém o cargo do estado atual

  const { register, handleSubmit } = useForm<FuncionarioFormData>();

  const { addToast } = useToast();
  const onSubmit = async (data: FuncionarioFormData) => {
    data.cargoId = +data.cargoId;

    try {
      await ApiPoints.createFuncionario(data);

      addToast({
        type: "success",
        title: "Sucesso!",
        description: "Funcionário criado com sucesso!",
      });

      props.history.push("/funcionarios");
      
    } catch (error) {
      addToast({
        type: "error",
        title: "Erro!",
        description: error.response.data,
      });
    }
  };

  return (
    <Container>
      <h2>Cadastro de funcionario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FuncionarioForm
          inputRefs={{
            cargoRef: register,
            dataNascimentoRef: register,
            nomeRef: register,
            salarioRef: register,
            sobrenomeRef: register,
          }}
        />
        <Button type="submit" btnTheme="success">
          Salvar
        </Button>
      </form>
    </Container>
  );
};

export default CadastroFuncionarioPage as React.FC;
