import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  @media only screen and (max-width: 600px) {
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
  width: 600px;
  border-top: solid 1px #2a363b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    margin-bottom: 16px;
  }
  display: flex;
  justify-content: center;
`;

export const Icon = styled(BsGithub)`
  height: 20px;
  margin-left: 10px;
  width: 20px;
  transition: fill 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    fill: #4096ff;
  }
`;
