import styled from 'styled-components';

export const Container = styled.form`
  align-items: center; /* Align items in the center */
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: inset 0 0 10px black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  /* Adaugă aici orice stil specific pentru input */

  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  border-radius: 6px;
  transition: all 0.2s;

  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;

  &:hover {
    border-color: #1677ff;
  }

  &:focus {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
    background-color: #ffffff;
  }
`;
