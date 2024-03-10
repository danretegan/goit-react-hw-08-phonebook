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
`;

export const ContactFormContainer = styled.div`
  /* Adaugă aici orice stiluri generale pentru ContactForm */
`;

export const Button = styled.button`
  /* Add any styles for the button here */
  align-self: center; /* Center the button within its container */
`;
