import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  // Replace with your actual auth check logic
  const isAuthenticated = true; // Example

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;