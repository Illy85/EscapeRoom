import { Routes, Route} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import Quest from '../../pages/quest/quest';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import Booking from '../../pages/booking/booking';
import MyQuests from '../../pages/my-quests/my-quests';
import PrivateRoute from '../private-route/private-route';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory }>
        <Routes>
          <Route
            index
            element = { <Main/> }
          />
          <Route
            path={`${ AppRoute.Quest }:id`}
            element= { <Quest/> }
          />
          <Route
            path={ AppRoute.Contacts }
            element={ <Contacts/> }
          />
          <Route
            path={ `${ AppRoute.Quest }:id${AppRoute.BookingQuest}` }
            element={
              <PrivateRoute
                authorizationStatus={ authorizationStatus }
                redirectTo={ AppRoute.Login }
              >
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.MyQuests }
            element={
              <PrivateRoute
                authorizationStatus={ authorizationStatus }
                redirectTo={ AppRoute.Login }
              >
                <MyQuests />
              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.Login }
            element={ <Login /> }
          />
          <Route
            path={ AppRoute.NotFound }
            element={ <PageNotFound/> }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
