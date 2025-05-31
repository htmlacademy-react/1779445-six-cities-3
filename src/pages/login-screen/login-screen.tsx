import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, CityName } from '../../const.ts';
import { loginAction } from '../../store/slices/user-slice/user-api-actions.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import React, { useState } from 'react';
import { getCurrentCity } from '../../store/slices/offers-slice/offers-selectors.ts';
import { setCity } from '../../store/slices/offers-slice/offers-slice.ts';

export default function LoginScreen() {
  const city = useAppSelector(getCurrentCity);
  const navigate = useNavigate(); // Используем хук для навигации
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(
      loginAction({
        login: email,
        password: password
      })
    );
    navigate(AppRoute.Root);
  };

  const checkedSity = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    const cityLink = (evt.currentTarget.querySelector('span') as HTMLSpanElement)?.textContent;
    if (cityLink) {
      dispatch(setCity(cityLink as CityName));
    }
  };

  return (
    <div className='page page--gray page--login'>
      <Helmet>
        <title>Authorization</title>
      </Helmet>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action='#' method='post' onSubmit={handleSubmit}>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  onChange={evt => setEmail(evt.target.value)}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                  pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$'
                  title='Пароль должен содержать хотя бы одну латинскую букву и одну цифру'
                  onChange={evt => setPassword(evt.target.value)}
                  autoComplete='username'
                />
              </div>
              <button className='login__submit form__submit button' type='submit'>
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link
                className='locations__item-link'
                to={AppRoute.Root}
                onClick={evt => checkedSity(evt)}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
