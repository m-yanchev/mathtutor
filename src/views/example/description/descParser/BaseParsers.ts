import { IParser } from "../interfaces"

export class NodeWithChildrenParser {

    private readonly children: IParser[]

    constructor( {children}: { children: IParser[] } ) {
        this.children = children
    }

    protected get childComponents(): React.ReactNode {
        return this.children.map( ( child, key ) => child.Component({key}) )
    }
}