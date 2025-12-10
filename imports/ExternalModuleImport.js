"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalModuleImport = void 0;
/**
 * Alternative to the namespace import. Can be used by various libraries.
 * (i.e. import foobar = require('foobar')).
 *
 * @export
 * @class ExternalModuleImport
 * @implements {AliasedImport}
 */
class ExternalModuleImport {
    get isNew() {
        return this.start === undefined || this.end === undefined;
    }
    constructor(libraryName, alias, start, end) {
        this.libraryName = libraryName;
        this.alias = alias;
        this.start = start;
        this.end = end;
    }
    /**
     * Clone the current import object.
     *
     * @returns {ExternalModuleImport}
     *
     * @memberof ExternalModuleImport
     */
    clone() {
        return new ExternalModuleImport(this.libraryName, this.alias, this.start, this.end);
    }
}
exports.ExternalModuleImport = ExternalModuleImport;
