'use strict';
import m from 'mithril';
import converter from '../models/converter';

export const converterView = {
  view: function () {
    return m('.mw8.center', [
      m('.geo-converter.fl.w-100.pa2', [
        m('form', {
            onsubmit: function (e) {
              e.preventDefault();
              converter.convert();
            },
          },
          [
            m('fieldset.cf.ph2-ns', [
              m('legend', ['Select Conversion Parameters']),
              m('label', [
                'Select to convert to a geohash or convert to a lat/lng:',
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
              ]),
              m('label', [
                'Select a georeference system:',
                m('select', {
                    autofocus: true,
                    onchange: m.withAttr('value', converter.setType),
                  },
                  Object.entries(converter.conversionTypes).map((entry) => {
                    return m('option', {value: entry[0]}, entry[1]);
                  })
                ),
              ]),
            ]),
            m('fieldset.cf.ph2-ns',
              {
                style: {
                  display: converter.conversionDirection === 'toHash' ? 'initial' : 'none',
                }
              }, [
                m('legend', ['Latitude / Longitude Data']),
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
                m('label', {
                  style: {
                    display: converter.conversionDirection === 'toHash' ? 'initial' : 'none',
                  }
                }, [
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
              ]),
            m('fieldset.cf.ph2-ns', {
              style: {
                display: converter.conversionDirection === 'toLatLng' ? 'initial' : 'none',
              },
            }, [
              m('legend', ['Reference Data']),
              m('label', [
                'Reference Code:',
                m('input', {
                  type: 'text',
                  name: 'reference',
                  value: converter.reference,
                }),
              ]),
            ]),
            m('input', {
              type: 'submit',
            }, ['Convert']),
          ]),
      ]),
    ]);
  },
};
