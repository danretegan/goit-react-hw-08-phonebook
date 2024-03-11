import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

/**
 * - Dacă ruta este restricționată și utilizatorul este autentificat, afișează <Navigate> către `redirectTo`.
 * - În caz contrar, afișează componenta.
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // Se utilizează hook-ul useAuth pentru a verifica starea de autentificare a utilizatorului.
  const { isLoggedIn } = useAuth();

  // Dacă utilizatorul este autentificat, redirecționează către ruta specificată ('/').
  // În caz contrar, afișează componenta corespunzătoare rutei actuale.
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
