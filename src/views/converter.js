'use strict';
import m from 'mithril';
import converter from '../models/converter';

export const converterView = {
  view: function () {
    return m('.geo-converter', [
      m('form', {
          onsubmit: function (e) {
            e.preventDefault();

          },
        },
        [
          m('select', {autofocus: true},
            Object.entries(converter.conversionTypes).map((entry) => {
              return m('option', {value: entry[0]}, entry[1]);
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
          m('input', {
            type: 'submit',
          }, ['Get Reference']),
        ]),
    ]);
  },
};
