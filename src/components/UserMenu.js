import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';
import s from './contacts.module.css';
import avatar from './cat.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

   return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Hello, {name}!</span>
      <button type="button" className={s.btn} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
  
}