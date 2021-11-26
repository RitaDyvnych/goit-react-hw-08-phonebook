import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './styles.module.css';
import { logIn } from '../redux/auth/auth-operations';

export default function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LogIn Page</h1>

      <form onSubmit={handleSubmit} style={s.form} autoComplete="off">
        <label style={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.btn}>Login</button>
      </form>
    </div>
  );
}