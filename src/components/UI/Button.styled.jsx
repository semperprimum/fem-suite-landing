import { styled } from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.primary ? "none" : "1px solid var(--clr-neutral-400)"};
  border-radius: 0.375rem;
  background: ${(props) => (props.primary ? "var(--clr-neutral-400)" : "none")};
  padding: ${(props) => (props.primary ? ".94rem 2rem .88rem" : ".75rem 1rem")};
  font-size: ${(props) => (props.primary ? "1.125rem" : "0.875rem")};
  line-height: ${(props) => (props.primary ? 1.77778 : 1.71429)};
  font-weight: 700;
  letter-spacing: ${(props) => (props.primary ? "-0.01125rem" : "-0.00875rem")};
  color: ${(props) =>
    props.primary ? "var(--clr-neutral-100)" : "var(--clr-neutral-400)"};
  @media only screen and (min-width: 37.5em) {
    font-size: ${(props) => (props.primary ? "1.125rem" : "1rem")};
    line-height: ${(props) => (props.primary ? 1.77778 : 2)};
    letter-spacing: ${(props) => (props.primary ? "-0.01125rem" : "-0.01rem")};
    padding: ${(props) =>
      props.primary ? ".94rem 2rem .88rem" : ".75rem 1.5rem"};
  }
`;
