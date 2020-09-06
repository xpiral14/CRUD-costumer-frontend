import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";

import { Container } from "./styles";

import CargoForm from "../../../components/CargoForm";
import Button from "../../../components/Button";

import Cargo from "../../../@types/models/cargo";
import { CargoFormData } from "../@types";

import { ApiPoints } from "../../../api";

import { useToast } from "../../../hooks/toast";

interface InformacaoCargoPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

const InformacaoCargoPage: React.FC<InformacaoCargoPageProps> = (props) => {
  const [cargo, setCargo] = useState<Cargo>();

  useEffect(() => {
    async function getCargo() {
      try {
        const response = await ApiPoints.getCargoById(props.match.params.id);

        if (!response.data) return props.history.push("/cargos");

        setCargo(response.data);
      } catch (error) {
        props.history.push("/cargos");
      }
    }

    getCargo();
  }, [props.match.params.id, props.history]);

  const { register, handleSubmit } = useForm<CargoFormData>();
  const { addToast } = useToast();
  const onSubmit = async (data: CargoFormData) => {
    await ApiPoints.updateCargo(cargo?.id as number, data);
    addToast({
      type: "success",
      title: "Sucesso!",
      description: `Cargo atualizado com successo`,
    });
    props.history.push("/cargos");
  };

  return (
    <Container>
      <h2>Informações sobre o cargo {cargo?.descricao}</h2>
      {!cargo ? (
        <h3>Carregando</h3>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <CargoForm inputRefs={{ descricaoRef: register }} cargo={cargo} />
          <Button type="submit" btnTheme="success">
            Salvar
          </Button>
        </form>
      )}
    </Container>
  );
};

export default InformacaoCargoPage as React.FC;
