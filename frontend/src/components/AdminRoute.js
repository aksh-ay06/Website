//unAuthenticated users should not see the profile screen

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { Routes } from '../../node_modules/react-router-dom/index';

export default function AdminRoute({ component: Component, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <Routes>
      <Route
        {...rest}
        render={() =>
          userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/signin" />
        }
      ></Route>
    </Routes>
  );
}
