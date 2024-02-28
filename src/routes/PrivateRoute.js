import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isRefreshing, isLoggedIn } = useAuth();
  return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
};
