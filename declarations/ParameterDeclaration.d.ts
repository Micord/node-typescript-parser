import { TypedDeclaration } from './Declaration';
import { DecoratorDeclaration as TshDecorator } from './DecoratorDeclaration';
/**
 * Parameter declaration. Is contained in a method or function delaration since a parameter can not be exported
 * by itself.
 *
 * @export
 * @class ParameterDeclaration
 * @implements {TypedDeclaration}
 */
export declare class ParameterDeclaration implements TypedDeclaration {
    name: string;
    type: string | undefined;
    start?: number | undefined;
    end?: number | undefined;
    decorators?: TshDecorator[] | undefined;
    constructor(name: string, type: string | undefined, start?: number | undefined, end?: number | undefined, decorators?: TshDecorator[] | undefined);
}
export declare class BoundParameterDeclaration extends ParameterDeclaration {
    private startCharacter;
    private endCharacter;
    parameters: ParameterDeclaration[];
    typeReference: string | undefined;
    name: string;
    type: string;
    constructor(startCharacter: string, endCharacter: string, start?: number, end?: number);
}
export declare class ObjectBoundParameterDeclaration extends BoundParameterDeclaration {
    constructor(start?: number, end?: number);
}
export declare class ArrayBoundParameterDeclaration extends BoundParameterDeclaration {
    constructor(start?: number, end?: number);
}
