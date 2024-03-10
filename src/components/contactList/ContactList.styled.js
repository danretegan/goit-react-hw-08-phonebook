import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 1rem;
`;

export const Label = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

// Dacă ai nevoie de stiluri generale pentru componenta ContactList, poți adăuga un container styled components:
export const ContactListContainer = styled.div`
  /* Adaugă aici orice stiluri generale pentru ContactList */
`;
