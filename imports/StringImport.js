"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringImport = void 0;
/**
 * Simple string import (i.e. import "reflect-metadata";).
 *
 * @export
 * @class StringImport
 * @implements {Import}
 */
class StringImport {
    get isNew() {
        return this.start === undefined || this.end === undefined;
    }
    constructor(libraryName, start, end) {
        this.libraryName = libraryName;
        this.start = start;
        this.end = end;
    }
    /**
     * Clone the current import object.
     *
     * @returns {StringImport}
     *
     * @memberof StringImport
     */
    clone() {
        return new StringImport(this.libraryName, this.start, this.end);
    }
}
exports.StringImport = StringImport;
