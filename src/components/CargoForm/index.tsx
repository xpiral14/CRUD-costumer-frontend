import React from "react";
import Input from "../Input";
import Cargo from "../../@types/models/cargo";

interface CargoFormProps {
  cargo?: Cargo;
  inputRefs: {
    descricaoRef: any;
  };
}
const CargoForm: React.FC<CargoFormProps> = ({ cargo, inputRefs }) => {
  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <Input
        type="text"
        ref={inputRefs.descricaoRef}
        name="descricao"
        placeholder="Descrição"
        id="descricao"
        defaultValue={cargo?.descricao}
      />
    </>
  );
};

export default CargoForm;
