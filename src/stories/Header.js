import { html } from 'lit-html';

import Logo from './assets/logo.svg';
import { Button } from './Button';
import './header.css';

export function Header({ user, onLogin, onLogout, onCreateAccount }) {

  const LogoutButton = Button({
    size: 'small', onClick: onLogout, label: 'Log out',
  });
  const LoginButton = Button({
    size: 'small', onClick: onLogin, label: 'Log in',
  });
  const SignupButton = Button({
    primary: true, size: 'small', onClick: onCreateAccount, label: 'Sign up',
  });

  return html`
    <header>
      <div class="wrapper">
        <div>
          <img src=${Logo} alt="logo" />
          <h1>Acme</h1>
        </div>
        <div>
          ${user ? LogoutButton : html`${LoginButton} ${SignupButton}`}
        </div>
      </div>
    </header>
  `;
}
