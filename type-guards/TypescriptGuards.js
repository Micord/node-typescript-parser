"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImportDeclaration = isImportDeclaration;
exports.isImportEqualsDeclaration = isImportEqualsDeclaration;
exports.isNamespaceImport = isNamespaceImport;
exports.isNamedImports = isNamedImports;
exports.isNamedExports = isNamedExports;
exports.isStringLiteral = isStringLiteral;
exports.isIdentifier = isIdentifier;
exports.isExternalModuleReference = isExternalModuleReference;
exports.isExportDeclaration = isExportDeclaration;
exports.isObjectBindingPattern = isObjectBindingPattern;
exports.isArrayBindingPattern = isArrayBindingPattern;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isMethodSignature = isMethodSignature;
exports.isPropertySignature = isPropertySignature;
exports.isMethodDeclaration = isMethodDeclaration;
exports.isPropertyDeclaration = isPropertyDeclaration;
exports.isConstructorDeclaration = isConstructorDeclaration;
exports.isGetAccessorDeclaration = isGetAccessorDeclaration;
exports.isSetAccessorDeclaration = isSetAccessorDeclaration;
const typescript_1 = require("typescript");
/**
 * Determines if the given node is an ImportDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ImportDeclaration}
 */
function isImportDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.ImportDeclaration;
}
/**
 * Determines if the given node is an ImportEqualsDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ImportEqualsDeclaration}
 */
function isImportEqualsDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.ImportEqualsDeclaration;
}
/**
 * Determines if the given node is a NamespaceImport.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is NamespaceImport}
 */
function isNamespaceImport(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.NamespaceImport;
}
/**
 * Determines if the given node are NamedImports.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is NamedImports}
 */
function isNamedImports(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.NamedImports;
}
/**
 * Determines if the given node are NamedExports.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is NamedExports}
 */
function isNamedExports(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.NamedExports;
}
/**
 * Determines if the given node is a StringLiteral.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is StringLiteral}
 */
function isStringLiteral(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.StringLiteral;
}
/**
 * Determines if the given node is an Identifier.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is Identifier}
 */
function isIdentifier(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.Identifier;
}
/**
 * Determines if the given node is an ExternalModuleReference.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ExternalModuleReference}
 */
function isExternalModuleReference(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.ExternalModuleReference;
}
/**
 * Determines if the given node is an ExportDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ExportDeclaration}
 */
function isExportDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.ExportDeclaration;
}
/**
 * Determines if the given node is an ObjectBindingPattern (i.e. let {x, y} = foo).
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ObjectBindingPattern}
 */
function isObjectBindingPattern(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.ObjectBindingPattern;
}
/**
 * Determines if the given node is an ArrayBindingPattern (i.e. let [x, y] = foo).
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ArrayBindingPattern}
 */
function isArrayBindingPattern(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.ArrayBindingPattern;
}
/**
 * Determines if the given node is a FunctionDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is FunctionDeclaration}
 */
function isFunctionDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.FunctionDeclaration;
}
/**
 * Determines if the given node is a MethodSignature.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is MethodSignature}
 */
function isMethodSignature(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.MethodSignature;
}
/**
 * Determines if the given node is a PropertySignature.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is PropertySignature}
 */
function isPropertySignature(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.PropertySignature;
}
/**
 * Determines if the given node is a MethodDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is MethodDeclaration}
 */
function isMethodDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.MethodDeclaration;
}
/**
 * Determines if the given node is a PropertyDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is PropertyDeclaration}
 */
function isPropertyDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.PropertyDeclaration;
}
/**
 * Determines if the given node is a ConstructorDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is ConstructorDeclaration}
 */
function isConstructorDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.Constructor;
}
/**
 * Determines if the given node is a isGetAccessorDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is isGetAccessorDeclaration}
 */
function isGetAccessorDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.GetAccessor;
}
/**
 * Determines if the given node is a SetAccessorDeclaration.
 *
 * @export
 * @param {Node} [node]
 * @returns {node is SetAccessorDeclaration}
 */
function isSetAccessorDeclaration(node) {
    return node !== undefined && node.kind === typescript_1.SyntaxKind.SetAccessor;
}
