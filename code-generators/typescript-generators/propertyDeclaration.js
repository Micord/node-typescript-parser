"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePropertyDeclaration = generatePropertyDeclaration;
const DeclarationVisibility_1 = require("../../declarations/DeclarationVisibility");
/**
 * Generates typescript code for a class property.
 *
 * @export
 * @param {PropertyDeclaration} property
 * @param {TypescriptGenerationOptions} { tabSize }
 * @returns {string}
 */
function generatePropertyDeclaration(property, { tabSize }) {
    return `${Array(tabSize + 1).join(' ')}` +
        `${property.visibility !== undefined ? (0, DeclarationVisibility_1.getVisibilityText)(property.visibility) + ' ' : ''}` +
        `${property.name}${property.isOptional ? '?' : ''}${property.type ? `: ${property.type}` : ''};\n`;
}
