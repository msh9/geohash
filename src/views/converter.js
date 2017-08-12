'use strict';
import m from 'mithril';
import converter from '../models/converter';

export const converterView = {
  view: function () {
    return m('.geo-converter', [
      m('form', {
          onsubmit: function (e) {
            e.preventDefault();
            converter.convertToReference();
          },
        },
        [
          m('select', {
              autofocus: true,
              onchange: m.withAttr('value', converter.setType),
            },
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
                oninput: m.withAttr('value', converter.setLatitude),
                value: converter.latitude,
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
                oninput: m.withAttr('value', converter.setLongitude),
                value: converter.longitude,
              }),
          ]),
          m('label', [
            'Reference Code:',
            m('input', {
              type: 'text',
              name: 'reference',
              value: converter.reference,
            }),
          ]),
          m('input', {
            type: 'submit',
          }, ['Get Reference']),
        ]),
    ]);
  },
};
