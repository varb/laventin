import { useAuth } from 'providers/AuthProvider';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();

  return (
    user ? (
      children
    ) : (
      <Navigate to='/login' state={{ from: location }} replace />
    )
  )
}
