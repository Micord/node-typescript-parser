"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorDeclaration = void 0;
/**
 * @export
 * @class DecoratorDeclaration
 * @implements {Declaration}
 */
class DecoratorDeclaration {
    constructor(name) {
        this.name = name;
        this.parameters = [];
    }
}
exports.DecoratorDeclaration = DecoratorDeclaration;
