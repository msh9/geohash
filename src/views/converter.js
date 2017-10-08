'use strict';
import m from 'mithril';
import converter from '../models/converter';

export const converterView = {
  view: function () {
    return m('.geo-converter', [
      m('form', {
          onsubmit: function (e) {
            e.preventDefault();
            converter.convert();
          },
        },
        [
          m('select', {
            onchange: m.withAttr('value', converter.setConversion),
          }, [
            m('option', {
              value: 'toHash',
            }, 'Convert To Hash'),
            m('option', {
              value: 'toLatLng',
            }, 'Convert To Lat/Lng'),
          ]),
          m('select', {
              autofocus: true,
              onchange: m.withAttr('value', converter.setType),
            },
            Object.entries(converter.conversionTypes).map((entry) => {
              return m('option', {value: entry[0]}, entry[1]);
            })
          ),
          m('label',
            {
              style: {
                display: converter.conversionDirection === 'toHash' ? 'initial' : 'none',
              }
            }, [
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
          m('label', {
              style: {
                display: converter.conversionDirection === 'toHash' ? 'initial' : 'none',
              }
            },[
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
          m('label', {
            style: {
              display: converter.conversionDirection === 'toLatLng' ? 'initial' : 'none',
            },
          }, [
            'Reference Code:',
            m('input', {
              type: 'text',
              name: 'reference',
              value: converter.reference,
            }),
          ]),
          m('input', {
            type: 'submit',
          }, ['Convert']),
        ]),
    ]);
  },
};
