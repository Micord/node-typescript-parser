import { AbstractDeclaration, AsyncDeclaration, CallableDeclaration, OptionalDeclaration, ScopedDeclaration, StaticDeclaration, TypedDeclaration } from './Declaration';
import { DeclarationVisibility } from './DeclarationVisibility';
import { ParameterDeclaration } from './ParameterDeclaration';
import { VariableDeclaration } from './VariableDeclaration';
import { DecoratorDeclaration } from "./DecoratorDeclaration";
/**
 * Method declaration. A method is contained in an interface or a class.
 * Contains information abount the method itself.
 *
 * @export
 * @class MethodDeclaration
 * @implements {CallableDeclaration}
 * @implements {ScopedDeclaration}
 * @implements {TypedDeclaration}
 */
export declare class MethodDeclaration implements AbstractDeclaration, AsyncDeclaration, CallableDeclaration, OptionalDeclaration, ScopedDeclaration, StaticDeclaration, TypedDeclaration {
    name: string;
    isAbstract: boolean;
    visibility: DeclarationVisibility | undefined;
    type: string | undefined;
    isOptional: boolean;
    isStatic: boolean;
    isAsync: boolean;
    start?: number | undefined;
    end?: number | undefined;
    decorators: DecoratorDeclaration[];
    parameters: ParameterDeclaration[];
    variables: VariableDeclaration[];
    constructor(name: string, isAbstract: boolean, visibility: DeclarationVisibility | undefined, type: string | undefined, isOptional: boolean, isStatic: boolean, isAsync: boolean, start?: number | undefined, end?: number | undefined);
}
