import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container } from "./styles";

import CargoForm from "../../../components/CargoForm";
import Button from "../../../components/Button";

import { ApiPoints } from "../../../api";

import { useToast } from "../../../hooks/toast";

interface InformacaoCargoPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

interface CargoFormData {
  descricao: string;
}

const CadastroCargoPage: React.FC<InformacaoCargoPageProps> = (props) => {
  const { register, handleSubmit } = useForm<CargoFormData>();
  const { addToast } = useToast();
  const onSubmit = async (data: CargoFormData) => {
    try {
      await ApiPoints.createCargo(data);

      addToast({
        type: "success",
        title: "Sucesso!",
        description: "Cargo adicionado com sucesso!",
      });
      props.history.push("/cargos");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Container>
      <h2>Cadastro de cargo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CargoForm inputRefs={{ descricaoRef: register }} />
        <Button type="submit" btnTheme="success">
          Salvar
        </Button>
      </form>
    </Container>
  );
};

export default CadastroCargoPage as React.FC;
