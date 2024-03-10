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
`;

// Dacă ai nevoie de stiluri generale pentru componenta SearchFilter, poți adăuga un container styled components:
export const SearchFilterContainer = styled.div`
  /* Adaugă aici orice stiluri generale pentru SearchFilter */
`;
