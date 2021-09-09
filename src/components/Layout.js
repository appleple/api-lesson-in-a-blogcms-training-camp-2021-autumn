import React from 'react';
import { ConditionsProvider } from '../store';

const style = {
  display: 'flex',
};

const Layout = ({ children }) => (
  <ConditionsProvider>
    <div style={style}>{children}</div>
  </ConditionsProvider>
);

export default Layout;
