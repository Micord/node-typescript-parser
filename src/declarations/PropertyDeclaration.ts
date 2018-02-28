import {ScopedDeclaration, TypedDeclaration} from './Declaration';
import {DeclarationVisibility} from './DeclarationVisibility';
import {DecoratorDeclaration} from './DecoratorDeclaration';

/**
 * Property declaration that contains its visibility.
 *
 * @export
 * @class PropertyDeclaration
 * @implements {ScopedDeclaration}
 * @implements {TypedDeclaration}
 */
export class PropertyDeclaration implements ScopedDeclaration, TypedDeclaration {
    public decorators: DecoratorDeclaration[] = [];
    constructor(
        public name: string,
        public visibility: DeclarationVisibility | undefined,
        public type: string | undefined,
        public start?: number,
        public end?: number,
    ) { }
}
