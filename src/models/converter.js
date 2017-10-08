'use strict';

import * as geo from 'georeference-js';

const Converter = {
  latitude: 0.0,
  longitude: 0.0,
  reference: '',
  type: '',
  conversionDirection: 'toHash',
  conversionTypes: geo.referenceNames,

  setLatitude: function (latitude) {
    Converter.latitude = latitude;
  },
  setLongitude: function (longitude) {
    Converter.longitude = longitude;
  },
  setType: function (type) {
    Converter.type = type;
  },
  setConversion: function (toFrom) {
    Converter.conversionDirection = toFrom;
  },
  convert: function convert() {
    if (Converter.toFrom === 'from') {
      Converter.convertFromReference();
    } else {
      Converter.convertToReference();
    }
  },
  convertToReference: function convertToRefernce() {
    if (!Number.isNaN(Converter.latitude) &&
      !Number.isNaN(Converter.longitude) &&
      Converter.conversionTypes[Converter.type]) {
      Converter.reference = geo.fromLatLng(Converter.type,
        Converter.latitude,
        Converter.longitude);
    } else {
      throw new Error('Cannot convert a non-number like type');
    }
  },
  convertFromReference: function convertFromReference() {
    if (Converter.conversionTypes.includes(Converter.type)) {
      const point = geo.toLatLng(Converter.type, Converter.reference);
      Converter.longitude = point.longitude;
      Converter.latitude = point.latitude;
    } else {
      throw new Error('Cannot convert from unknown reference system');
    }
  },
};

export {Converter as default};
