import styled from 'styled-components';

export const ContactItems = styled.li`
  align-items: center;
  background-color: #f5f6f7;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const ContactNumber = styled.a`
  color: #1677ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  background-color: #1677ff;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  :hover {
    background-color: #1677ff;
  }
`;

export const DeleteButton = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
  background-color: #1677ff;
  border-radius: 4px;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  :hover {
    background-color: #1677ff;
  }
`;
