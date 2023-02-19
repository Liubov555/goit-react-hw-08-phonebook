import { Section } from "./App.styles";

import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";

import { refreshUser } from "redux/auth/operations";
import { useAuth } from "Hooks/useAuth";
import { Layout } from "components/Layout/Layout";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


export default function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Section>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path='/register' element={
            <RestrictedRoute redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
          />

          <Route path='/login' element={
            <RestrictedRoute redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
          />

          <Route path='/contacts' element={
            <PrivateRoute redirectTo="/contacts"
              component={<ContactsPage />}
            />
          }
          />

        </Route>
      </Routes>
    </Section >
  );
};

