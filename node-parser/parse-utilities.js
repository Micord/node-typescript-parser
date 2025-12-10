"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNodeExported = isNodeExported;
exports.isNodeDefaultExported = isNodeDefaultExported;
exports.getNodeType = getNodeType;
exports.containsModifier = containsModifier;
exports.getNodeVisibility = getNodeVisibility;
exports.getDefaultResourceIdentifier = getDefaultResourceIdentifier;
const typescript_1 = require("typescript");
const File_1 = require("../resources/File");
/**
 * Checks if the given typescript node has the exported flag.
 * (e.g. export class Foobar).
 *
 * @export
 * @param {Node} node
 * @returns {boolean}
 */
function isNodeExported(node) {
    const flags = (0, typescript_1.getCombinedModifierFlags)(node);
    return (flags & typescript_1.ModifierFlags.Export) === typescript_1.ModifierFlags.Export;
}
/**
 * Checks if the given typescript node has the default flag.
 * (e.g. export default class Foobar).
 *
 * @export
 * @param {Node} node
 * @returns {boolean}
 */
function isNodeDefaultExported(node) {
    const flags = (0, typescript_1.getCombinedModifierFlags)(node);
    return (flags & typescript_1.ModifierFlags.Default) === typescript_1.ModifierFlags.Default;
}
/**
 * Returns the type text (type information) for a given node.
 *
 * @export
 * @param {(TypeNode | undefined)} node
 * @returns {(string | undefined)}
 */
function getNodeType(node) {
    return node ? node.getText() : undefined;
}
/**
 * Checks if a node contains a certain modifier (of a given kind)
 *
 * @export
 * @param {Node} node
 * @param {SyntaxKind} modifierKind
 * @returns {boolean}
 */
function containsModifier(node, modifierKind) {
    if (!node.modifiers)
        return false;
    return node.modifiers.some((mod) => mod.kind === modifierKind);
}
/**
 * Returns the enum value (visibility) of a node.
 *
 * @export
 * @param {Node} node
 * @returns {(DeclarationVisibility | undefined)}
 */
function getNodeVisibility(node) {
    if (!node.modifiers) {
        return undefined;
    }
    for (const modifier of node.modifiers) {
        switch (modifier.kind) {
            case typescript_1.SyntaxKind.PublicKeyword:
                return 2 /* DeclarationVisibility.Public */;
            case typescript_1.SyntaxKind.ProtectedKeyword:
                return 1 /* DeclarationVisibility.Protected */;
            case typescript_1.SyntaxKind.PrivateKeyword:
                return 0 /* DeclarationVisibility.Private */;
            default:
                break;
        }
    }
}
/**
 * Function that calculates the default name of a resource.
 * This is used when a default export has no name (i.e. export class {}).
 *
 * @export
 * @param {TsResource} resource
 * @returns {string}
 */
function getDefaultResourceIdentifier(resource) {
    if (resource instanceof File_1.File && resource.isWorkspaceFile) {
        return resource.parsedPath.name;
    }
    return resource.identifier;
}
