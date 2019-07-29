import React from 'react';

// import { Container } from './styles';

import { Route } from 'react-router-dom';

import AuthLayout from '../pages/_layout/auth';
import defaultLayout from '../pages/_layout/default';

export default function RouteWrapper({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const LayoutDesign = isPrivate ? defaultLayout : AuthLayout;

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
