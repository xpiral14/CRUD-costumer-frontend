import React from "react";
import { Container } from "./styles";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cargo from "../../../@types/models/cargo";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import FuncionarioForm from "../../../components/FuncionarioForm";
import { createFuncionario } from "../../../store/funcionario/actions";
import { FuncionarioFormData } from "../@types";

interface InformacaoCargoPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

const CadastroFuncionarioPage: React.FC<InformacaoCargoPageProps> = (props) => {
  // obtém o cargo do estado atual
  const cargo = useSelector((s) =>
    s.cargos.find((cargo) => cargo.id === +props.match.params.id)
  ) as Cargo;

  const { register, handleSubmit } = useForm<FuncionarioFormData>();
  const dispatch = useDispatch();
  const onSubmit = (data: FuncionarioFormData) => {
    data.cargoId = +data.cargoId;
    dispatch(createFuncionario(data));
    props.history.push("/funcionarios");
  };

  return (
    <Container>
      <h2>Informações sobre o cargo {cargo?.descricao}</h2>
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
