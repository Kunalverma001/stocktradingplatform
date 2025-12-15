import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null; // prevents redirect loop

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
