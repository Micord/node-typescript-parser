"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInterface = parseInterface;
const typescript_1 = require("typescript");
const DefaultDeclaration_1 = require("../declarations/DefaultDeclaration");
const InterfaceDeclaration_1 = require("../declarations/InterfaceDeclaration");
const MethodDeclaration_1 = require("../declarations/MethodDeclaration");
const PropertyDeclaration_1 = require("../declarations/PropertyDeclaration");
const TypescriptGuards_1 = require("../type-guards/TypescriptGuards");
const function_parser_1 = require("./function-parser");
const parse_utilities_1 = require("./parse-utilities");
/**
 * Parses an interface node into its declaration.
 * Calculates the property and method defintions of the interface as well.
 *
 * @export
 * @param {Resource} resource
 * @param {InterfaceDeclaration} node
 */
function parseInterface(resource, node) {
    const name = node.name ? node.name.text : (0, parse_utilities_1.getDefaultResourceIdentifier)(resource);
    const interfaceDeclaration = new InterfaceDeclaration_1.InterfaceDeclaration(name, (0, parse_utilities_1.isNodeExported)(node), node.getStart(), node.getEnd());
    if ((0, parse_utilities_1.isNodeDefaultExported)(node)) {
        interfaceDeclaration.isExported = false;
        resource.declarations.push(new DefaultDeclaration_1.DefaultDeclaration(interfaceDeclaration.name, resource));
    }
    if (node.heritageClauses) {
        node.heritageClauses.forEach((clause) => {
            if (clause.token === typescript_1.SyntaxKind.ExtendsKeyword) {
                clause.types.forEach(type => interfaceDeclaration.extendsClauses.push(type.getText()));
            }
            else if (clause.token === typescript_1.SyntaxKind.ImplementsKeyword) {
                clause.types.forEach(type => interfaceDeclaration.implementsClauses.push(type.getText()));
            }
        });
    }
    if (node.members) {
        node.members.forEach((o) => {
            if ((0, TypescriptGuards_1.isPropertySignature)(o)) {
                interfaceDeclaration.properties.push(new PropertyDeclaration_1.PropertyDeclaration(o.name.text, 2 /* DeclarationVisibility.Public */, (0, parse_utilities_1.getNodeType)(o.type), !!o.questionToken, (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), o.getStart(), o.getEnd()));
            }
            else if ((0, TypescriptGuards_1.isMethodSignature)(o)) {
                const method = new MethodDeclaration_1.MethodDeclaration(o.name.text, true, 2 /* DeclarationVisibility.Public */, (0, parse_utilities_1.getNodeType)(o.type), !!o.questionToken, (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.AsyncKeyword), o.getStart(), o.getEnd());
                method.parameters = (0, function_parser_1.parseMethodParams)(o);
                interfaceDeclaration.methods.push(method);
            }
        });
    }
    if (node.typeParameters) {
        interfaceDeclaration.typeParameters = node.typeParameters.map(param => param.getText());
    }
    resource.interfaces.push(interfaceDeclaration);
}
