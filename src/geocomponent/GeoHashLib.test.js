import geohashLatLng from 'GeoHashLib.js';

describe('Convert to geohash from latitude and longitude', () => {
   test('Rejects precision less than 1', () => {
       expect(() => {
           geohashLatLng(12.1, 12.1, 0);
       }).toThrow();
   });

   test('Encode the first longitude and latitude bits correctly', () => {
       expect(geohashLatLng(89, 91, 1)).toBe
   })
});
