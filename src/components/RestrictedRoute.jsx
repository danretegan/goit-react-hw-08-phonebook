import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // component - RegisterPage or LoginPage
  const { isLoggedIn } = useAuth(); // isLoggedIn - true or false
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; // if isLoggedIn is true, then redirect to redirectTo, else render Component
};
