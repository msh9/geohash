'use strict';

import geo from 'georeference-js';

export const Converter = {
  conversionTypes: geo.referenceNames,
  convertToReference: function convertToRefernce(latitude,
                                                 longitude,
                                                 type) {
    if (!Number.isNaN(latitude) &&
      !Number.isNaN(longitude) &&
      Converter.conversionTypes.includes(type)) {
      return geo.fromLatLng(type, latitude, longitude);
    } else {
      throw new Error('Cannot convert a non-number like type');
    }
  },
  convertFromReference: function convertFromReference(reference,
                                                      type) {
    if (Converter.conversionTypes.includes(type)) {
      return geo.toLatLng(type, reference);
    } else {
      throw new Error('Cannot convert from unknown reference system');
    }
  },
};
