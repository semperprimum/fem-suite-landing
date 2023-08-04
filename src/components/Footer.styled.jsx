import { styled } from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";
import { Attribution } from "../components";

const FooterWrapper = styled.div`
  text-align: center;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
  margin: 3.5rem var(--padding-x) 5rem;
  @media only screen and (min-width: 37.5em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 4.5rem;
  }
  @media only screen and (min-width: 60em) {
    margin-top: 5.85rem;
    margin-bottom: 1.5rem;
  }
`;
const CopyrightText = styled.p`
  font-size: var(--fs-300);

  margin-block: 2.06rem;
  letter-spacing: 0.00519rem;
  line-height: 2.13333;
  @media only screen and (min-width: 37.5em) {
    margin-block: 0;
  }
  @media only screen and (min-width: 60em) {
    margin-left: 2.35rem;
  }
`;
const SocialsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.75rem;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 60em) {
    a {
      display: block;
      height: 1.25rem;
      svg {
        min-height: 1.25rem;
        fill: var(--clr-neutral-400);
      }
      &:hover,
      &:focus-visible {
        svg {
          fill: var(--clr-neutral-300);
        }
      }
    }
  }
`;

export function Footer() {
  return (
    <footer>
      <FooterWrapper>
        <Logo />
        <CopyrightText className="text-neutral-300">
          Copyright - Suite
        </CopyrightText>
        <SocialsList aria-label="Social links" role="list">
          <li>
            <a href="#" aria-label="Facebook">
              <IconFacebook aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <IconTwitter aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <IconInstagram aria-hidden="true" />
            </a>
          </li>
        </SocialsList>
      </FooterWrapper>
      <Attribution />
    </footer>
  );
}
