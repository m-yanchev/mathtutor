import ExampleDS from "@/dataSources/example/Example";
import User from "../user/User";
import Example from "./Example";
import ExampleInput from "./ExampleInput";
import type { ContentProps, ExampleData } from "./interfaces";

export default class DataSource extends Example {

    public static async loadById( id: number ) : Promise<Example> {
        const data: ExampleData = await ExampleDS.getById( id )        
        return new Example(data)
    }

    public static async loadDataList() : Promise<Example[]> {
        const dataList: ExampleData[] = await ExampleDS.getList()
        return dataList.map( data => new Example( data ) )
    }

    public static async save( exampleInput: ExampleInput ) : Promise<Example> {
        await User.throwIfNotAdmin()
        const data: ExampleData = await ExampleDS.create( exampleInput )
        return new Example( data ) 
    }

    public static async updateById( id: number, exampleInput: ExampleInput ) : Promise<Example> {
        await User.throwIfNotAdmin()
        const data: ExampleData = await ExampleDS.updateById( id, exampleInput )
        return new Example( data )
    }

    public static async updateContentProps( contentProps: ContentProps ) : Promise<void> {
        await User.throwIfNotAdmin()
        await ExampleDS.updateContentProps( contentProps )
    }
    
    public static async updateContentPropsList( contentPropsList: ContentProps[] ) : Promise<void> {
        await User.throwIfNotAdmin()
        await ExampleDS.updateContentPropsList( contentPropsList )
    }
}