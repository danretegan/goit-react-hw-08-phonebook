import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  @media only screen and (max-width: 600px) {
    width: 320px;
  }
  width: 600px;
  border-top: solid 1px #2a363b;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(BsGithub)`
  margin-left: 10px;
  width: 20px;
  height: 20px;
  transition: fill 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    fill: #4096ff;
  }
`;
