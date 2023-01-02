import React from 'react';
import { App } from '../../app/containers/App';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ServerStyleSheet } from 'styled-components';
import { template } from './template';

export const render = (url: string, initialProps: object = {}): string => {

  const sheet = new ServerStyleSheet();

  const streamApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    )
  )

  const styleTags = sheet.getStyleTags(); 

  const html = template(streamApp, initialProps, styleTags)
  return html;
}