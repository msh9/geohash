'use strict';
import m from 'mithril';

export const converterView = {
  view: function () {
    return m('.geo-converter', [
      m('form', [
        m('select', {autofocus: true}, [
          m('option', {value: 'geohash'}, 'GeoHash'),
          m('option', {value: 'georef'}, 'GeoRef'),
          m('option', {value: 'mhlocator'}, 'MH Locator'),
        ]),
        m('label', [
          'Latitude:',
          m('input',
            {
              type: 'number',
              max: 180,
              min: -180,
              require: true,
              name: 'latitude',
              placeholder: 0.0,
            }),
        ]),
        m('label', [
          'Longitude:',
          m('input',
            {
              type: 'number',
              max: 180,
              min: -180,
              require: true,
              name: 'longitude',
              placeholder: 0.0,
            }),
        ]),
        m('label', [
          'Reference Code:',
          m('input', {
            type: 'text',
            name: 'reference',
          }),
        ]),
      ]),
    ]);
  },
};
