import { styled } from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Button } from ".";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--padding-x);
  padding-top: 1.5rem;

  @media only screen and (min-width: 37.5em) {
    padding-top: 2.5rem;
  }
  @media only screen and (min-width: 60em) {
    padding-top: 3.13rem;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Button>Request Beta Access</Button>
    </StyledHeader>
  );
}
