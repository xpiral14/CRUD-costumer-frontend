import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import { CargoFormData } from "../@types";

import CargoForm from "../../../components/CargoForm";
import Button from "../../../components/Button";

import { updateCargo } from "../../../store/cargo/actions";

import Cargo from "../../../@types/models/cargo";

interface InformacaoCargoPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}



const InformacaoCargoPage: React.FC<InformacaoCargoPageProps> = (props) => {
  // obtém o cargo do estado atual
  const cargo = useSelector((s) =>
    s.cargos.find((cargo) => cargo.id === +props.match.params.id)
  ) as Cargo;

  const { register, handleSubmit } = useForm<CargoFormData>();
  const dispatch = useDispatch();
  const onSubmit = (data: CargoFormData) => {
    dispatch(updateCargo(cargo.id, data.descricao));
    props.history.push("/cargos")
  };

  return (
    <Container>
      <h2>Informações sobre o cargo {cargo?.descricao}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CargoForm inputRefs={{ descricaoRef: register }} cargo={cargo} />
        <Button type="submit" btnTheme="success">
          Salvar
        </Button>
      </form>
    </Container>
  );
};

export default InformacaoCargoPage as React.FC;
