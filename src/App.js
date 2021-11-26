import "./App.css";
import style from "./components/contacts.module.css";
import { Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getIsCurrentUser } from './redux/auth/auth-selectors';
import { currentUser } from './redux/auth/auth-operations';

const ContactsPage = lazy(() => import('./pages/Contacts'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));

export default function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PrivateRoute exact path="/contacts">
            <ContactsPage />
          </PrivateRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <LoginPage />
          </PublicRoute>
          {/* redirectTo="/contacts" */}
        </Switch>
      </Suspense>
    </div>
  );
}
