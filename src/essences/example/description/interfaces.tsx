export interface IParser {
    Component: ( props: ParserComponentProps ) => React.ReactNode
}

export type ParserComponentProps = { key?: number }
