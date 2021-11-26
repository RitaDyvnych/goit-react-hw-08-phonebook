import s from "./contacts.module.css";
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import NavBar from './NavBar';


export default function Navigation() {

  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
        { isLoggedIn ? <NavBar/> : <AuthNav/>}
    </header>
  );
}