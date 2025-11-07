import { useEditor } from "@tiptap/react";
import EditorProps from "@/editor/EditorProps";
import getContentUpdatedJSONData from "@/editor/getContentUpdatedJSONData";
import type { ContentProps } from "@/essences/example/interfaces";

export default function useHTMLToJSONContentListParser( htmlContentPropsList: ContentProps[] ): ContentProps[] {
    
    const editors = htmlContentPropsList.map( props => {
        const editorProps = new EditorProps(props)
        return useEditor(editorProps)
    } )

    const jsonContentList: string[] = editors.map( editor => {
        if ( !editor ) return 'not ready'
        const updatedContentObject = getContentUpdatedJSONData( editor )
        return updatedContentObject
    } )

    return htmlContentPropsList.map( ( props, index ) => ({
        id: props.id,
        content: jsonContentList[index]
    }) )
}
