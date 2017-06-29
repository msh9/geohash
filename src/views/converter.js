'use strict';
import m from 'mithril';

export const converterView = {
  view: function() {
    return m('.geo-converter', [
      m('form', [
        m('select', {autofocus: true}, [
          m('option', {value: 'geohash'}, 'GeoHash'),
        ]),
      ]),
    ]);
  },
};
