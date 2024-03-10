import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../authNav/AuthNav';
import { Header } from './AppBar.styled';
import { useAuth } from '../../hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <Header>
      <Navigation />
      {renderNavigation()}
    </Header>
  );
};

export default AppBar;
