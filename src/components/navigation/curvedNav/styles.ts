import styled from "styled-components";

export const Navbar = styled.div<{ bg: string }>`
  width: 35%;
  height: 100vh;
  background-color: ${(props) => props.bg};
  padding: 2em 2em;
  background: radial-gradient(
    circle at 300%,
    #fff 70%,
    ${(props) => props.bg} 10%,
    ${(props) => props.bg} 10%
  ); ;
`;
