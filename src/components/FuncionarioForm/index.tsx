import React, { useMemo } from "react";
import Input from "../Input";
import Funcionario from "../../@types/models/funcionario";
import { useSelector } from "react-redux";
import Select from "../Select";
import { Container } from "./styles";

interface CargoFormProps {
  funcionario?: Funcionario;
  inputRefs: {
    nomeRef: any;
    sobrenomeRef: any;
    cargoRef: any;
    dataNascimentoRef: any;
    salarioRef: any;
  };
}
const FuncionarioForm: React.FC<CargoFormProps> = ({
  funcionario,
  inputRefs,
}) => {
  const cargos = useSelector((s) => s.cargos);

  const cargosOption = useMemo(
    () => cargos.map((cargo) => ({ value: cargo.id, label: cargo.descricao })),
    [cargos]
  );
  return (
    <Container>
      <label htmlFor="nome">Descrição</label>
      <Input
        type="text"
        ref={inputRefs.nomeRef}
        name="nome"
        placeholder="Fulano"
        id="nome"
        defaultValue={funcionario?.nome}
        maxLength={50}
        minLength={3}
        required
      />
      <label htmlFor="sobrenome">Sobrenome</label>
      <Input
        type="text"
        ref={inputRefs.sobrenomeRef}
        name="sobrenome"
        placeholder="de Tal"
        id="sobrenome"
        defaultValue={funcionario?.sobrenome}
        maxLength={50}
        minLength={3}
        required
      />
      <label htmlFor="cargo">Cargo</label>
      <Select
        id="cargo"
        name="cargoId"
        defaultValue={funcionario?.cargoId}
        ref={inputRefs.cargoRef}
        required
      >
        <option value="">Selecionar cargo</option>
        {cargosOption.map((cargo) => (
          <option key={cargo.value} value={cargo.value}>
            {cargo.label}
          </option>
        ))}
      </Select>

      <label htmlFor="dataNascimento">Data de nascimento</label>

      <Input
        type="date"
        ref={inputRefs.dataNascimentoRef}
        name="dataNascimento"
        placeholder="Descrição"
        id="dataNascimento"
        defaultValue={funcionario?.dataNascimento}
        min="1930-01-01"
        max="2020-01-01"
        required
      />

      <label htmlFor="salario">Salário</label>
      <Input
        type="number"
        step="0.01"
        ref={inputRefs.dataNascimentoRef}
        name="salario"
        placeholder="2450,35"
        id="salario"
        min={400}
        max={25000}
        defaultValue={funcionario?.salario}
      />
    </Container>
  );
};

export default FuncionarioForm;
