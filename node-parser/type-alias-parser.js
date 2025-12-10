"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTypeAlias = parseTypeAlias;
const TypeAliasDeclaration_1 = require("../declarations/TypeAliasDeclaration");
const parse_utilities_1 = require("./parse-utilities");
/**
 * Parses a type alias into the declaration.
 *
 * @export
 * @param {Resource} resource
 * @param {TypeAliasDeclaration} node
 */
function parseTypeAlias(resource, node) {
    resource.declarations.push(new TypeAliasDeclaration_1.TypeAliasDeclaration(node.name.text, (0, parse_utilities_1.isNodeExported)(node), node.getStart(), node.getEnd()));
}
