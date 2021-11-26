import { NavLink } from 'react-router-dom';
import s from "./contacts.module.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Contacts
      </NavLink>
      <button type='button' className={s.btn}>Log out</button>
    </nav>
  );
}