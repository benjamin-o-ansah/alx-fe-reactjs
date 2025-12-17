import { Navigate } from 'react-router-dom';

// Simple mock auth hook
const useAuth = () => {
  const user = { loggedIn: false }; // Change to true to "log in"
  return user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;