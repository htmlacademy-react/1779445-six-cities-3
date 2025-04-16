import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isLogging?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, isLogging, children}: PrivateRouteProps) : JSX.Element{
  return (
    authorizationStatus === (isLogging ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={ isLogging ? AppRoute.Root : AppRoute.Login } />
  );
}
