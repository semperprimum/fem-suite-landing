import { styled } from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";

const FooterWrapper = styled.footer`
  text-align: center;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
`;
const CopyrightText = styled.p`
  margin-block: 2.06rem;
`;
const SocialsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.75rem;
  align-items: center;
  justify-content: center;
`;

export function Footer() {
  return (
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
  );
}