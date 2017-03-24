/**
 * A small geohash library. These are small utility functions implementing algorithms originally design
 * by Gustavo Niemeyer. All functions that deal with latitude and longitude assume the WGS84 coordinate system.
 * @module
 */

const geohashBase32 = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'j',
    'k',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

/**
 * Point defines a WGS84 Coordinate System Point
 * @class
 */
export class Point {
    /**
     *
     * @param {number} latitude A WGS84 latitude
     * @param {number} longitude A WGS84 longitude
     */
    constructor(latitude, longitude) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    /**
     *
     * @returns {number} Latitude
     */
    getLatitude() {
        return this._latitude;
    }

    /**
     *
     * @returns {number} Longitude
     */
    getLongitude() {
        return this._longitude
    }

    /**
     * Calculates the 12 character geohash for this point
     * @returns {string} The geohash for this point
     */
    geohash() {
        return geohashFromLatLng(this._latitude, this._longitude);
    }
}

/**
 * Returns a geohash string built from a WGS84 latitude longitude pair
 * @param {number} latitude A WGS84 latitude
 * @param {number} longitude A WGS84 longitude
 * @param {number=12} precision The level of precision to encode
 * @returns {string} A geohash string
 */
export function geohashFromLatLng(latitude, longitude, precision=12) {
    if (precision < 1) {
        throw new Error('Precision value must be 1 or greater');
    }

}
