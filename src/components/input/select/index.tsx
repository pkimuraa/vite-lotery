import { SelectInput } from "./styles";

export const Select = () => {
  return (
    <div>
      <SelectInput>
        <option value="0">Mega-Sena</option>
        <option value="1">Loto-Fácil</option>
        <option value="2">Jogo do Bixo</option>
      </SelectInput>
    </div>
  );
};
