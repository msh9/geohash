'use strict';
import * as m from 'mithril';

export default {
  view: () => {
    return m('.geo-converter', [
      m('form', [
        m('select', {autofocus: true}, [
          m('option', {value: 'geohash'}, 'GeoHash'),
        ]),
      ]),
    ]);
  },
};
