import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5f6f7;
  padding: 10px;
  border-radius: 6px;
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

  &:focus-visible {
    border-radius: 6px;
    outline: 4px solid #91caff;
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }
`;

export const EditButton = styled.button`
  background-color: #1677ff;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  margin-top: 5px;
  width: 115px;

  &:hover {
    background-color: #4096ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  }
  &.active {
    background-color: #0958d9;
  }

  &:focus-visible {
    outline: 4px solid #91caff;
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }
`;

export const DeleteButton = styled.button`
  background-color: #1677ff;
  border: none;
  border-radius: 6px;
  color: red;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  margin-top: 5px;
  width: 115px;

  &:hover {
    background-color: #4096ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  }
  &.active {
    background-color: #0958d9;
  }
  &:focus-visible {
    outline: 4px solid red;
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }
`;
