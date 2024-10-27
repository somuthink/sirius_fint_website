import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedRouteProps {
  title: string;
  children: ReactNode;
}

export const ProtectedRoute = ({ title, children }: ProtectedRouteProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
