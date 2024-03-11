import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

/**
 * - Dacă ruta este privată și utilizatorul este autentificat, randează componenta.
 * - Altfel randează <Navigate> pentru a redirecționa către redirectTo.
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // Se utilizează hook-ul `useAuth` pentru a obține starea autentificării și pentru a actualiza informațiile (isRefreshing).
  const { isLoggedIn, isRefreshing } = useAuth();

  // Verifică dacă este necesară redirecționarea, adică dacă utilizatorul nu este autentificat și nu se reîmprospătează informațiile de autentificare.
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  // Returnează componenta dacă NU este necesară redirecționarea, altfel randează un <Navigate> pentru a redirecționa către ruta specificată ('/').
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
