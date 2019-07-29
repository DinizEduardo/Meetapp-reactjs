import React from 'react';

// import { Container } from './styles';

import { Route } from 'react-router-dom';
import AuthLayout from '../pages/_layout/auth';

export default function RouteWrapper({ component: Component, ...rest }) {
  const LayoutDesign = AuthLayout;

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
