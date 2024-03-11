import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  margin-right: 4px;
  width: 40px;
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

export const Button = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }
  > svg {
    width: 30px;
    height: 22px;
    fill: #de7709;
  }
  padding: 3px 10px 0 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #4096ff;
    > svg {
      fill: #fff;
    }
  }
`;
