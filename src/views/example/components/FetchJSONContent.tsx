"use client";

import Example from "@/essences/example/Example";
import type { ContentProps } from "@/essences/example/interfaces";
import useHTMLToJSONContentListParser from "../../../editor/hooks/useHTMLToJSONContentListParser";

export default function FetchJSONContent( { htmlContentPropsList }: { htmlContentPropsList: ContentProps[] } ) {

    const jsonContentPropsList: ContentProps[] = useHTMLToJSONContentListParser( htmlContentPropsList )
    const notReady = jsonContentPropsList.some( props => props.content === 'not ready' )

    const handleClick = () => {
        Example.putContentPropsList( jsonContentPropsList )
    }

    return (
        <div className="flex flex-col gap-8 p-8">
            <h1 className="">Fetching JSON Content...</h1>
            <button
                disabled={notReady}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:opacity-50"
                onClick={handleClick}
            >
                Fetch all JSON Content
            </button>
            {jsonContentPropsList.map( ( props ) => (
                <div className="flex flex-col gap-4 border border-black p-4" key={props.id}>
                    <h2>Content ID: {props.id}</h2>
                    <p>{props.content}</p>
                    <button
                        disabled={ props.content === 'not ready' }
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:opacity-50"
                        onClick={ () => Example.putContentProps( props ) }
                    >
                        Fetch example
                    </button>
                </div>
            ))}
        </div>
    )
}