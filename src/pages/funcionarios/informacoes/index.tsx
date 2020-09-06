import React from "react";
import { Container } from "./styles";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import FuncionarioForm from "../../../components/FuncionarioForm";
import Funcionario from "../../../@types/models/funcionario";
import { FuncionarioFormData } from "../@types";
import { updateFuncionario } from "../../../store/funcionario/actions";

interface InformacaoFuncionarioPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}


const InformacaoFuncionarioPage: React.FC<InformacaoFuncionarioPageProps> = (
  props
) => {
  // obtém o cargo do estado atual
  const funcionario = useSelector((s) =>
    s.funcionarios.find(
      (funcionario) => funcionario.id === +props.match.params.id
    )
  ) as Funcionario;

  const { register, handleSubmit} = useForm<FuncionarioFormData>();
  const dispatch = useDispatch();
  const onSubmit = (data: FuncionarioFormData) => {
     dispatch(updateFuncionario(funcionario.id, data));
    props.history.push("/funcionarios");
  };
  return (
    <Container>
      <h2>
        Informações sobre
        {` ${funcionario?.nome} ${funcionario.sobrenome}`}
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
    </Container>
  );
};

export default InformacaoFuncionarioPage as React.FC;
