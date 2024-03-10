import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthData } from '../../types/auth-data';

function LoginForm():JSX.Element {

  const { register, handleSubmit, formState: {errors} } = useForm<AuthData>();

  const dispatch = useAppDispatch();

  const regexEmail = /^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,15}$/gm;

  const OnLogIn: SubmitHandler<AuthData> = (data) => {

    dispatch(loginAction({
      login: data.login ,
      password: data.password
    }));
  };

  return (
    <div className="login__form">
      <form
        className="login-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
        onSubmit={ (evt) => void handleSubmit(OnLogIn)(evt) }
      >
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">
        E&nbsp;–&nbsp;mail
              </label>
              <input
                type="email"
                id="email"
                {...register('login', {required: true, pattern: regexEmail})}
                placeholder="Адрес электронной почты"
                autoComplete='email'
              />
              {errors.login && <span>Введите валидный Email</span>}
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">
        Пароль
              </label>
              <input
                type="password"
                id="password"
                {...register('password', {required: true, pattern: regexPassword})}
                placeholder="Пароль"
                autoComplete='current-password'
              />
              {errors.password && <span>Введите валидный пароль</span>}
            </div>
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
            type="submit"
          >
    Войти
          </button>
        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            required
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
    Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="#">
      правилами обработки персональных данных
            </a>
    &nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </div>
  );
}

export default LoginForm;
