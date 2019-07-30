import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layout/auth';
import defaultLayout from '../pages/_layout/default';

import { store } from '../store';

export default function RouteWrapper({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const LayoutDesign = signed ? defaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <LayoutDesign>
          <Component {...props} />
        </LayoutDesign>
      )}
    />
  );
}
