import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import HeaderNavigation from '../header-navigation/header-navigation';

function Header(): JSX.Element {
  return(
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <Link to={ AppRoute.Main }>
            <svg width={134} height={52} aria-hidden="true">
              <use xlinkHref="#logo" />
            </svg>
          </Link>
        </span>
        <HeaderNavigation/>
      </div>
    </header>
  );
}

export default Header;
