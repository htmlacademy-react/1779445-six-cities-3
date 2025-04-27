import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth as string
    ? children
    : <Navigate to={AppRoute.Login} />;
}
