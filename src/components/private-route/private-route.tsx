import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isLoggin?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, isLoggin, children}: PrivateRouteProps) : JSX.Element{
  return (
    authorizationStatus === (isLoggin ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={ isLoggin ? AppRoute.Root : AppRoute.Login } />
  );
}
