// src/ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
    element: React.ReactNode;
    path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
