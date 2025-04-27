import { Helmet } from 'react-helmet-async';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {loginAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';
import {useState} from 'react';

export default function LoginScreen() {
  const navigate = useNavigate(); // Используем хук для навигации
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAction({
      login: email,
      password: password
    }));
    navigate(AppRoute.Root);
  };

  return (
    <div className="page page--gray page--login">
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
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={(evt) => setEmail(evt.target.value)} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  pattern="[A-Za-z0-9]+"
                  title="Пароль может содержать только латинские буквы и цифры"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
