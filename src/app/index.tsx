import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './containers/App';

const container = document.getElementById('app');

// Get and remove initial props
const initialProps = window.__INITIAL_PROPS__
delete window.__INITIAL_PROPS__
const initialPropsTag = document.getElementById('initialProps')
initialPropsTag.remove()

hydrateRoot(
  container,
  <BrowserRouter>
    <App {...initialProps}/>
  </BrowserRouter>
)

if (module.hot) {
  module.hot.accept();
}