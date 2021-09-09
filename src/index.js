import React from 'react';
import ReactDOM from 'react-dom';
import domContentLoaded from 'dom-content-loaded';
import App from './App';

domContentLoaded(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
});
