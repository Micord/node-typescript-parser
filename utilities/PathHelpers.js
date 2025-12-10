"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePathUri = normalizePathUri;
exports.normalizeFilename = normalizeFilename;
exports.toPosix = toPosix;
const os_1 = require("os");
/**
 * Returns a normalized version of the a path uri. Removes a "file://" or "file:///" prefix and removes semicolons.
 *
 * @export
 * @param {string} uri
 * @returns {string}
 */
function normalizePathUri(uri) {
    const decoded = decodeURIComponent(uri);
    if ((0, os_1.platform)() === 'win32') {
        return decoded.replace('file:///', '');
    }
    return decoded.replace('file://', '');
}
/**
 * Returns an adjusted and normalized filepath to use within the index.
 * Essentially does remove `.tsx` `.ts` `.js` `.jsx` endings and other adjustments.
 *
 * @export
 * @param {string} filepath
 * @returns {string}
 */
function normalizeFilename(filepath) {
    return toPosix(filepath.replace(/([.]d)?[.](t|j)sx?$/g, ''));
}
/**
 * On Windows, replaces all backslash delimeters with forward slashes.
 * On other OSes, returns the path unmodified.
 */
function toPosix(path) {
    if ((0, os_1.platform)() === 'win32') {
        return path.replace(/\\/g, '/');
    }
    return path;
}
