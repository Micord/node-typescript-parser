"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCallableDeclaration = isCallableDeclaration;
exports.isExportableDeclaration = isExportableDeclaration;
exports.isAliasedImport = isAliasedImport;
/**
 * Determines if the given object is a CallableDeclaration.
 *
 * @export
 * @param {*} obj
 * @returns {obj is CallableDeclaration}
 */
function isCallableDeclaration(obj) {
    return obj && obj.parameters && obj.variables;
}
/**
 * Determines if the given object is an ExportableDeclaration.
 *
 * @export
 * @param {*} obj
 * @returns {obj is ExportableDeclaration}
 */
function isExportableDeclaration(obj) {
    return obj && Object.keys(obj).indexOf('isExported') >= 0;
}
/**
 * Determines if the given object is an AliasedImport.
 *
 * @export
 * @param {*} obj
 * @returns {obj is AliasedImport}
 */
function isAliasedImport(obj) {
    return obj && Object.keys(obj).indexOf('alias') >= 0;
}
