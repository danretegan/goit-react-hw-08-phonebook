import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5f6f7;
  padding: 10px;
  border-radius: 4px;
`;

export const ContactName = styled.span`
  margin-bottom: 5px;
`;

export const ContactNumber = styled.a`
  cursor: pointer;
  color: #1677ff;

  &:hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  background-color: #1677ff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  margin-top: 5px;
  &:hover {
    background-color: #4096ff;
  }
  &:focus {
    outline: 2px solid black;
  }
`;

export const DeleteButton = styled.button`
  background-color: #1677ff;
  border: none;
  border-radius: 4px;
  color: red;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  margin-top: 5px;
  &:hover {
    background-color: #4096ff;
  }
  &:focus {
    outline: 2px solid red;
  }
`;
