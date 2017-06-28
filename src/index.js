'use strict';
import * as m from 'mithril';
import * as converter from './views/converter';

m.route(document.body, '/converter', {
  '/converter': converter,
});
