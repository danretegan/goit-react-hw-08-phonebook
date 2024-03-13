import { Container, FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <p>GoIT 2023-2024</p>
      <Container>
        <span>Powered by Dan Retegan</span>
        <a
          href="https://github.com/danretegan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to GitHub"
        >
          <Icon />
        </a>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
