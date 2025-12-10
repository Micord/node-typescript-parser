"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVisibilityText = getVisibilityText;
/**
 * Returns the visibility string for a given enum value.
 *
 * @param {DeclarationVisibility} [visibility]
 * @returns {string}
 */
function getVisibilityText(visibility) {
    switch (visibility) {
        case 0 /* DeclarationVisibility.Private */:
            return 'private';
        case 2 /* DeclarationVisibility.Public */:
            return 'public';
        case 1 /* DeclarationVisibility.Protected */:
            return 'protected';
        default:
            return '';
    }
}
