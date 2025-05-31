import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCurrentAuthStatus } from '../../store/slices/user-slice/user-selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getCurrentAuthStatus);
  return authorizationStatus === (AuthorizationStatus.Auth as string) ? (
    <Navigate to={AppRoute.Login} />
  ) : (
    children
  );
}
