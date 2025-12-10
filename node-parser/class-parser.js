"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClassIdentifiers = parseClassIdentifiers;
exports.parseDecorators = parseDecorators;
exports.parseCtorParams = parseCtorParams;
exports.parseClass = parseClass;
const typescript_1 = require("typescript");
const ts = require("typescript");
const AccessorDeclaration_1 = require("../declarations/AccessorDeclaration");
const ClassDeclaration_1 = require("../declarations/ClassDeclaration");
const ConstructorDeclaration_1 = require("../declarations/ConstructorDeclaration");
const DecoratorDeclaration_1 = require("../declarations/DecoratorDeclaration");
const DefaultDeclaration_1 = require("../declarations/DefaultDeclaration");
const MethodDeclaration_1 = require("../declarations/MethodDeclaration");
const ParameterDeclaration_1 = require("../declarations/ParameterDeclaration");
const PropertyDeclaration_1 = require("../declarations/PropertyDeclaration");
const TypescriptGuards_1 = require("../type-guards/TypescriptGuards");
const function_parser_1 = require("./function-parser");
const identifier_parser_1 = require("./identifier-parser");
const parse_utilities_1 = require("./parse-utilities");
/**
 * Parses the identifiers of a class (usages).
 *
 * @export
 * @param {Resource} tsResource
 * @param {Node} node
 */
function parseClassIdentifiers(tsResource, node) {
    for (const child of node.getChildren()) {
        switch (child.kind) {
            case typescript_1.SyntaxKind.Identifier:
                (0, identifier_parser_1.parseIdentifier)(tsResource, child);
                break;
            default:
                break;
        }
        parseClassIdentifiers(tsResource, child);
    }
}
/**
 * Parses decorators
 *
 * @export
 * @param {Node} node
 */
function parseDecorators(node) {
    let decorators = [];
    const nodeDecorators = ts.canHaveDecorators(node) ? ts.getDecorators(node) : undefined;
    if (nodeDecorators) {
        decorators = nodeDecorators.map((param) => {
            const args = param.expression.arguments;
            const parameters = args.map((arg) => {
                return arg.text ? arg.text : arg.getText();
            });
            const tshDecorator = new DecoratorDeclaration_1.DecoratorDeclaration(param.expression.expression.getText());
            tshDecorator.parameters = parameters;
            return tshDecorator;
        });
    }
    return decorators;
}
/**
 * Parse information about a constructor. Contains parameters and used modifiers
 * (i.e. constructor(private name: string)).
 *
 * @export
 * @param {TshClass} parent
 * @param {TshConstructor} ctor
 * @param {ConstructorDeclaration} node
 */
function parseCtorParams(parent, ctor, node) {
    if (!node.parameters) {
        return;
    }
    node.parameters.forEach((o) => {
        if ((0, TypescriptGuards_1.isIdentifier)(o.name)) {
            ctor.parameters.push(new ParameterDeclaration_1.ParameterDeclaration(o.name.text, (0, parse_utilities_1.getNodeType)(o.type), o.getStart(), o.getEnd(), parseDecorators(o)));
            if (!o.modifiers) {
                return;
            }
            parent.properties.push(new PropertyDeclaration_1.PropertyDeclaration(o.name.text, (0, parse_utilities_1.getNodeVisibility)(o), (0, parse_utilities_1.getNodeType)(o.type), !!o.questionToken, (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), o.getStart(), o.getEnd()));
        }
        else if ((0, TypescriptGuards_1.isObjectBindingPattern)(o.name) || (0, TypescriptGuards_1.isArrayBindingPattern)(o.name)) {
            const identifiers = o.name;
            const elements = [...identifiers.elements];
            // TODO: BindingElement
            ctor.parameters = ctor.parameters.concat(elements.map((bind) => {
                if ((0, TypescriptGuards_1.isIdentifier)(bind.name)) {
                    return new ParameterDeclaration_1.ParameterDeclaration(bind.name.text, undefined, bind.getStart(), bind.getEnd(), parseDecorators(bind));
                }
            }).filter(Boolean));
        }
    });
}
/**
 * Parses a class node into its declaration. Calculates the properties, constructors and methods of the class.
 *
 * @export
 * @param {Resource} tsResource
 * @param {ClassDeclaration} node
 */
function parseClass(tsResource, node) {
    const name = node.name ? node.name.text : (0, parse_utilities_1.getDefaultResourceIdentifier)(tsResource);
    const classDeclaration = new ClassDeclaration_1.ClassDeclaration(name, (0, parse_utilities_1.isNodeExported)(node), node.getStart(), node.getEnd());
    if ((0, parse_utilities_1.isNodeDefaultExported)(node)) {
        classDeclaration.isExported = false;
        tsResource.declarations.push(new DefaultDeclaration_1.DefaultDeclaration(classDeclaration.name, tsResource));
    }
    if (node.heritageClauses) {
        node.heritageClauses.forEach((clause) => {
            if (clause.token === typescript_1.SyntaxKind.ExtendsKeyword) {
                clause.types.forEach(type => classDeclaration.extendsClauses.push(type.getText()));
            }
            else if (clause.token === typescript_1.SyntaxKind.ImplementsKeyword) {
                clause.types.forEach(type => classDeclaration.implementsClauses.push(type.getText()));
            }
        });
    }
    if (node.typeParameters) {
        classDeclaration.typeParameters = node.typeParameters.map(param => param.getText());
    }
    if (ts.canHaveDecorators(node)) {
        classDeclaration.decorators = parseDecorators(node);
    }
    if (node.members) {
        node.members.forEach((o) => {
            if ((0, TypescriptGuards_1.isPropertyDeclaration)(o)) {
                const actualCount = classDeclaration.properties.length;
                const tshProperty = new PropertyDeclaration_1.PropertyDeclaration(o.name.text, (0, parse_utilities_1.getNodeVisibility)(o), (0, parse_utilities_1.getNodeType)(o.type), !!o.questionToken, (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), o.getStart(), o.getEnd());
                if (o.modifiers) {
                    classDeclaration.properties.push(tshProperty);
                }
                if (actualCount === classDeclaration.properties.length) {
                    classDeclaration.properties.push(tshProperty);
                }
                if (ts.canHaveDecorators(o)) {
                    tshProperty.decorators = parseDecorators(o);
                }
                return;
            }
            if ((0, TypescriptGuards_1.isGetAccessorDeclaration)(o)) {
                classDeclaration.getters.push(new AccessorDeclaration_1.GetterDeclaration(o.name.text, (0, parse_utilities_1.getNodeVisibility)(o), (0, parse_utilities_1.getNodeType)(o.type), o.modifiers !== undefined && o.modifiers.some(m => m.kind === typescript_1.SyntaxKind.AbstractKeyword), (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), o.getStart(), o.getEnd()));
            }
            if ((0, TypescriptGuards_1.isSetAccessorDeclaration)(o)) {
                classDeclaration.setters.push(new AccessorDeclaration_1.SetterDeclaration(o.name.text, (0, parse_utilities_1.getNodeVisibility)(o), (0, parse_utilities_1.getNodeType)(o.type), o.modifiers !== undefined && o.modifiers.some(m => m.kind === typescript_1.SyntaxKind.AbstractKeyword), (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), o.getStart(), o.getEnd()));
            }
            if ((0, TypescriptGuards_1.isConstructorDeclaration)(o)) {
                const ctor = new ConstructorDeclaration_1.ConstructorDeclaration(classDeclaration.name, o.getStart(), o.getEnd());
                parseCtorParams(classDeclaration, ctor, o);
                classDeclaration.ctor = ctor;
                (0, function_parser_1.parseFunctionParts)(tsResource, ctor, o);
            }
            else if ((0, TypescriptGuards_1.isMethodDeclaration)(o)) {
                const method = new MethodDeclaration_1.MethodDeclaration(o.name.text, o.modifiers !== undefined && o.modifiers.some(m => m.kind === typescript_1.SyntaxKind.AbstractKeyword), (0, parse_utilities_1.getNodeVisibility)(o), (0, parse_utilities_1.getNodeType)(o.type), !!o.questionToken, (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.StaticKeyword), (0, parse_utilities_1.containsModifier)(o, typescript_1.SyntaxKind.AsyncKeyword), o.getStart(), o.getEnd());
                method.parameters = (0, function_parser_1.parseMethodParams)(o);
                method.decorators = parseDecorators(o);
                classDeclaration.methods.push(method);
                (0, function_parser_1.parseFunctionParts)(tsResource, method, o);
            }
        });
    }
    parseClassIdentifiers(tsResource, node);
    tsResource.classes.push(classDeclaration);
}
