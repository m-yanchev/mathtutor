import { useMemo } from 'react'
import { renderToReactElement } from '@tiptap/static-renderer/pm/react'
import { NodeProps } from '@tiptap/static-renderer'
import { generateJSON } from "@tiptap/html"
import getExtensions from '@/editor/getExtensions'
import MathItem from "@/views/formula/components/MathItem"
import checkJSONContent from '../checkJSONContent'

type Props = Readonly<{
    id: number
    content: string
}>

export default function Example( props: Props ) {

    const extensions = getExtensions( props.id )
    const options = {
        nodeMapping: {
            math: ( ctx: NodeProps ) => {
                const { formula } = ctx.node.attrs
                return <MathItem formula={formula} />
            }
        }
    }
    const content = checkJSONContent( props.content ) ? JSON.parse( props.content ) : generateJSON( props.content, extensions )

    const output = useMemo( () => {
        return renderToReactElement({
            extensions,
            content,
            options
      }) 
    }, [ props.content, props.id ] )

    return (
        <div className="w-full flex flex-col gap-[24px] lg:block lg:space-y-[24px]" >
            {output}
        </div>
    )
}