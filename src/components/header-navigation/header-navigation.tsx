import { Link } from 'react-router-dom';

import { logoutAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function HeaderNavigation():JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userIsAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link to={AppRoute.Main} className="link">
                Квесты
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="link" to={AppRoute.Contacts}>
                Контакты
            </Link>
          </li>
          { userIsAuthorized ?
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.MyQuests}>
                Мои бронирования
              </Link>
            </li>
            : null}
        </ul>
      </nav>
      <div className="header__side-nav">
        { userIsAuthorized ?
          <>
            <Link to="#" className="btn btn--accent header__side-item"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Выйти
            </Link>
            <a
              className="link header__side-item header__phone-link"
              href="tel:88003335599"
            >
              8 (000) 111-11-11
            </a>
          </>
          :
          <Link to={ AppRoute.Login } className="btn btn--accent header__side-item">
              Вoйти
          </Link>}
      </div>
    </>
  );
}

export default HeaderNavigation;
