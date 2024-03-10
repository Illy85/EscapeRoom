import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';


import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

function Login():JSX.Element {

  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus, navigate]);

  return(
    <>
      <Helmet>
        <title>{ 'Escape Room - Login' }</title>
      </Helmet>
      <Header/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <LoginForm/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Login;
