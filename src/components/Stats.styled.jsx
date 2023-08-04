import { styled } from "styled-components";

const StatsWrapper = styled.section``;
const List = styled.ul`
  padding: 0;
  text-align: center;
  display: grid;
  gap: 2rem;
  margin: 0;
  margin-top: 3.5rem;

  @media only screen and (min-width: 37.5em) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 8rem;
  }
  @media only screen and (min-width: 60em) {
    text-align: start;
    grid-template-columns: revert;
    margin-top: 0.15rem;
    margin-right: 5rem;
    gap: 4rem;
  }
`;
const Number = styled.span`
  text-transform: uppercase;
  font-size: var(--fs-700);
  font-weight: var(--fw-bold);
  line-height: 1.16667;
`;
const Title = styled.p`
  text-transform: uppercase;
  font-size: var(--fs-400);
  line-height: 1.625;
  letter-spacing: 0.15625rem;
`;

export function Stats() {
  const stats = [
    {
      number: "2k+",
      title: "Companies",
    },
    {
      number: "8",
      title: "Languages",
    },
    {
      number: "1.2m",
      title: "leads",
    },
  ];
  return (
    <StatsWrapper>
      <List role="list">
        {stats.map((stat) => (
          <li key={stat.title}>
            <Number>{stat.number}</Number>
            <Title className="text-neutral-300">{stat.title}</Title>
          </li>
        ))}
      </List>
    </StatsWrapper>
  );
}
