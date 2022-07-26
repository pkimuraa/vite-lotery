import { Navbar } from "./styles";
import { Select } from "../../input/select/index";

interface Props {
  bg: string;
}

export default function NavigationMenu({ bg, ...rest }: Props) {
  return (
    <div>
      <Navbar bg={bg}>
        <Select />
      </Navbar>
    </div>
  );
}
