import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/slices/offers-slice/offers-selectors.ts';
import { setCity } from '../../store/slices/offers-slice/offers-slice.ts';
import { loginAction } from '../../store/slices/user-slice/user-api-actions.ts';

function getRandomCity(): CityName {
  const cities = Object.values(CityName);
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCurrentCity);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  useEffect(() => {
    const randomCity = getRandomCity();
    dispatch(setCity(randomCity));
  }, [dispatch]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(
      loginAction({
        login: email,
        password: password,
      }),
    );
  };

  // Исправлен тип события
  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    const cityElement = evt.currentTarget.querySelector('span');
    if (cityElement?.textContent) {
      dispatch(setCity(cityElement.textContent as CityName));
    }
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const timeout = setTimeout(() => {
      if (!email) {
        setIsEmailError(false);
        return;
      }
      setIsEmailError(!emailRegex.test(email));
    }, 300);
    return () => clearTimeout(timeout);
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
    const timeout = setTimeout(() => {
      if (!password) {
        setIsPasswordError(false);
        return;
      }
      setIsPasswordError(!passwordRegex.test(password));
    }, 500);
    return () => clearTimeout(timeout);
  }, [password]);

  return (
    <>
      <Helmet>
        <title>Authorization</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className={`login__input form__input ${isEmailError ? 'input--error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(evt) => setEmail(evt.target.value)}
                />
                {isEmailError && (
                  <p className="input__error-message">
                    Неверный формат email. Пример: user@example.com
                  </p>
                )}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className={`login__input form__input ${isPasswordError ? 'input--error' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  minLength={2}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$"
                  title="Пароль должен содержать хотя бы одну латинскую букву и одну цифру"
                  onChange={(evt) => setPassword(evt.target.value)}
                  autoComplete="username"
                />
                {isPasswordError && (
                  <p className="input__error-message">
                    Пароль должен содержать минимум 6 символов, включая хотя бы одну латинскую букву
                    и одну цифру.
                  </p>
                )}
              </div>
              <button
                className={`login__submit form__submit button ${isEmailError || isPasswordError ? 'button-login__disabled' : ''}`}
                type="submit"
                disabled={isEmailError || isPasswordError} // Добавлено отключение кнопки
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={handleCityClick} // Использована исправленная функция
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
