import React from 'react';

import classes from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={classes.container}>
      <form>
        <div>
          <label htmlFor="login">логин: </label>
          <input name="login" id="login" type="text" />
        </div>
        <div>
          <label htmlFor="password">пароль: </label>
          <input name="password" id="password" type="password" />
        </div>
        <button type="submit">Поехали!</button>
      </form>
    </div>
  );
}

export default LoginForm;
