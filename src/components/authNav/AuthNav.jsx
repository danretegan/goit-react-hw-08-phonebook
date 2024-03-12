import { Links } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Links to="/register">Register</Links>
      <Links to="/login">Login</Links>
    </div>
  );
}
