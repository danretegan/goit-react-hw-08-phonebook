import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: black;
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
`;

export const SearchFilterContainer = styled.div`
  /* Adaugă aici orice stiluri generale pentru SearchFilter */
`;
