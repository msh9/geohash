'use strict';
import m from 'mithril';
import 'converter';

export const converterView = {
  view: function () {
    return m('.geo-converter', [
      m('form', [
        m('select', {autofocus: true},
          converter.conversionTypes.map((type, name) => {
              return m('option', {value: type}, name);
          })
        ),
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
