import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

 type PrivateRouteProps = {
   authorizationStatus: AuthorizationStatus;
   children: JSX.Element;
   redirectTo: AppRoute;
 }

function PrivateRoute({ authorizationStatus, children, redirectTo }: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? <Navigate to={ redirectTo }/> : children
  );
}

export default PrivateRoute;
