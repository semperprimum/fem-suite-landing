import { Button, Stats } from "../components";
import { styled } from "styled-components";
import curve from "../assets/pattern-curved-line-1.svg";
import heroLandscape from "../assets/image-hero-landscape@2x.webp";
import heroPortrait from "../assets/image-hero-portrait@2x.webp";

const StyledIntroduction = styled.section`
  padding-inline: var(--padding-x);
  margin-top: 5.21rem;
`;

const PrimaryHeading = styled.h1`
  font-size: var(--fs-900);
  font-weight: var(--fw-regular);
  line-height: 1.15789;
  letter-spacing: -0.033rem;
`;

const Bold = styled.span`
  font-weight: var(--fw-bold);
`;

const Highlight = styled.span`
  position: relative;
  font-weight: var(--fw-bold);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -1.75rem;
    background-image: url(${curve});
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Body = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.75;
  font-size: var(--fs-500);
  letter-spacing: 0.00556rem;
`;

const Picture = styled.picture`
  margin-top: 3.5rem;
`;

export function Introduction() {
  return (
    <StyledIntroduction>
      <div>
        <PrimaryHeading className="text-neutral-400">
          A <Bold>super</Bold> <Highlight>solution</Highlight> for your{" "}
          <Bold>business.</Bold>
        </PrimaryHeading>
        <Body className="text-neutral-300">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </Body>
        <Button primary={true}>Request Beta Access</Button>
      </div>

      <Picture>
        <source media="(min-width: 37.5em)" srcSet={heroPortrait} />
        <img src={heroLandscape} alt="" />
      </Picture>

      <Stats />
    </StyledIntroduction>
  );
}
