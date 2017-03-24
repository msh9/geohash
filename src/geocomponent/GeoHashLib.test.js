import { Point, geohashFromLatLng } from './GeoHashLib.js';

describe('Convert to geohash from latitude and longitude', () => {
   test('Rejects precision less than 1', () => {
       expect(() => {
           geohashFromLatLng(12.1, 12.1, 0);
       }).toThrow();
   });

   test('Encode the first longitude and latitude bits correctly', () => {
       expect(geohashFromLatLng(89, 91, 1)).toBe('y');
   });

   test('Encode the first 12 characters correctly', () => {
       expect(geohashFromLatLng(-25.382708, -49.265506, 12)).toBe('6gkzwgjzn820');
   });

   describe('Point class based conversion', () => {
        test('Encode using using a point', () => {
             let point = new Point(-25.382708, -49.265506);
             expect(point.geohash()).toBe('6gkzwgjzn820');
        });
   });
});
