import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { useAuth } from '../../hooks';
import { Container, Email, Name, Section } from './UserMenu.styled';
import Button from '../Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <Container>
      <Section>
        <Name>Welcome {user.name}</Name>
        <Button type="button" action={handleLogout}>
          Logout
        </Button>
      </Section>
      <Email>{user.email}</Email>
    </Container>
  );
}
