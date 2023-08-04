import { styled } from "styled-components";

const AttributionWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-weight: var(--fw-bold);
  padding-bottom: 1.52625rem;

  @media only screen and (min-width: 60em) {
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: var(--clr-accent-purple);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 150ms ease;
      }
      &:hover {
        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
`;

export function Attribution() {
  return (
    <AttributionWrapper className="text-neutral-300">
      Challenge by{" "}
      <a
        className="text-accent-purple"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className="text-accent-purple" href="https://github.com/semperprimum">
        Bogdan Kim
      </a>
      .
    </AttributionWrapper>
  );
}
