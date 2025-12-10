"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayBoundParameterDeclaration = exports.ObjectBoundParameterDeclaration = exports.BoundParameterDeclaration = exports.ParameterDeclaration = void 0;
/**
 * Parameter declaration. Is contained in a method or function delaration since a parameter can not be exported
 * by itself.
 *
 * @export
 * @class ParameterDeclaration
 * @implements {TypedDeclaration}
 */
class ParameterDeclaration {
    constructor(name, type, start, end, decorators) {
        this.name = name;
        this.type = type;
        this.start = start;
        this.end = end;
        this.decorators = decorators;
        if (decorators && decorators.length === 0) {
            this.decorators = undefined;
        }
    }
}
exports.ParameterDeclaration = ParameterDeclaration;
class BoundParameterDeclaration extends ParameterDeclaration {
    // @ts-ignore
    get name() {
        return this.parameters.length ?
            `${this.startCharacter} ${this.parameters.map(p => p.name).join(', ')} ${this.endCharacter}` :
            this.startCharacter + this.endCharacter;
    }
    set name(_) { }
    // @ts-ignore
    get type() {
        return this.typeReference ||
            this.parameters.length ?
            `{ ${this.parameters.map(p => p.type).join(', ')} }` :
            this.startCharacter + this.endCharacter;
    }
    set type(_) { }
    constructor(startCharacter, endCharacter, start, end) {
        super('', '', start, end);
        this.startCharacter = startCharacter;
        this.endCharacter = endCharacter;
        this.parameters = [];
    }
}
exports.BoundParameterDeclaration = BoundParameterDeclaration;
class ObjectBoundParameterDeclaration extends BoundParameterDeclaration {
    constructor(start, end) {
        super('{', '}', start, end);
    }
}
exports.ObjectBoundParameterDeclaration = ObjectBoundParameterDeclaration;
class ArrayBoundParameterDeclaration extends BoundParameterDeclaration {
    constructor(start, end) {
        super('[', ']', start, end);
    }
}
exports.ArrayBoundParameterDeclaration = ArrayBoundParameterDeclaration;
