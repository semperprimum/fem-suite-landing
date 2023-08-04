import { styled } from "styled-components";
import jeremySm from "../assets/image-jeremy-small@2x.webp";
import jeremyLg from "../assets/image-jeremy-large@2x.webp";
import curve from "../assets/pattern-curved-line-2.svg";

const HeroWrapper = styled.section`
  position: relative;
  border-radius: 0.9375rem;
  text-align: center;
  margin-top: 14.81rem;
  padding: 21.13rem var(--padding-x) 4rem;

  background-image: url(${curve});
  background-repeat: no-repeat;
  background-size: 3.07925rem;
  background-position: top 16.5rem center;

  @media only screen and (min-width: 37.5em) {
    margin-inline: var(--padding-x);
    padding: 21.13rem 3.6rem 4rem;
  }
`;
const Heading = styled.h2`
  font-weight: var(--fw-regular);
  font-size: var(--fs-800);
  line-height: 1.2;
  letter-spacing: -0.02606rem;

  & > .bold {
    font-weight: var(--fw-bold);
  }
`;
const PictureWrapper = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 100vmax;
    top: 3.5rem;
    left: 50%;
    filter: blur(4.375rem);

    transform: translateX(-50%);
    background-color: hsla(297, 68%, 64%, 1);
  }
`;
const HeroPicture = styled.picture`
  position: absolute;
  top: -11.3125rem;
  left: 50%;
  transform: translateX(-50%);
  & img {
    max-width: 15.75rem;
    margin-inline: auto;
  }
`;

const Content = styled.div``;

const Body = styled.p`
  font-size: var(--fs-600);
  line-height: 1.77778;
  margin-block: 2.5rem;
  letter-spacing: 0.00563rem;
`;

const Name = styled.strong`
  font-size: var(--fs-600);
  text-transform: uppercase;
  line-height: 1.77778;
  letter-spacing: -0.01125rem;
`;
const Role = styled.p`
  text-transform: uppercase;
  line-height: 1.625;
  letter-spacing: 0.15625rem;
`;

export function Hero() {
  return (
    <HeroWrapper className="bg-neutral-400 text-neutral-100">
      <PictureWrapper>
        <HeroPicture>
          <source media="(min-width: 60em)" srcSet={jeremyLg} />
          <img src={jeremySm} alt="Jeremy Robinson, CMO of Fylo" />
        </HeroPicture>
      </PictureWrapper>
      <Content>
        <Heading>
          It just <span className="bold">works.</span>
        </Heading>
        <Body className="text-neutral-200">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </Body>
        <Name>Jeremy Robinson</Name>
        <Role>CMO, Fylo</Role>
      </Content>
    </HeroWrapper>
  );
}
