import React from 'react';
import { App } from '../../app/containers/App';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { template } from './template';

export const render = (url: string, initialProps: object = {}): string => {
  const streamApp = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
  const html = template(streamApp, initialProps)
  return html;
}