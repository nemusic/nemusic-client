import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthService from '../../services/AuthService';

import classes from './LoginForm.module.css';

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.login(login, password);
    navigate('/');
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">логин: </label>
          <input name="login" id="login" type="text" onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">пароль: </label>
          <input name="password" id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Поехали!</button>
      </form>
    </div>
  );
}

export default LoginForm;
