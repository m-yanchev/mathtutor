import { 
    type BaseAnswer as IBaseAnswer, 
    type AnswerData, 
    type AnswerType, 
    type Answer as IAnswer, 
    type NumericalAnswer as INumericalAnswer, 
    type OptionAnswer as IOptionAnswer, 
    type RelationAnswer as IRelationAnswer,
    type OptionValue,
    type NumericalValue,
    type NumericalInput,
    type OptionInput,
    type RelationValue,
    type RelationInput,
    OptionType,
    OptionMap,
    ResultOptionType,
    ResultOptionMap
} from "./interfaces";

class BaseAnswer implements IBaseAnswer {

    public get data(): AnswerData {
        return ""
    }

    public get missed(): boolean {
        return true
    }
}

class NumericalAnswer extends BaseAnswer implements INumericalAnswer {

    public readonly value : NumericalValue;

    private constructor( value: NumericalValue ) {
        super();
        this.value = value;
    }

    public get data(): AnswerData {
        return this.value
    }

    public get missed(): boolean {
        return this.value === ""
    }

    public isCorrect( result: NumericalAnswer ): boolean {
        return this.value === result.value
    }

    public static createDefault(): NumericalAnswer {
        return new NumericalAnswer( "" );
    }

    public static createByData( data: AnswerData ): NumericalAnswer {
        return new NumericalAnswer( data as NumericalValue );
    }

    public static createByInput( input: NumericalInput ): NumericalAnswer {
        return new NumericalAnswer( input as NumericalValue );
    }
}

class OptionAnswer extends BaseAnswer implements IOptionAnswer {

    private static OPTION_CHARS = "АБВГД";
    private static UNDEFINED_CHAR = "_";
    public readonly value : OptionValue;

    private constructor( value: OptionValue ) {
        super();
        this.value = value;
    }

    public get data(): AnswerData {
        return this.value !== -1 ? OptionAnswer.OPTION_CHARS[this.value] : OptionAnswer.UNDEFINED_CHAR
    }

    public get missed(): boolean {
        return this.value === -1
    }

    public get map(): OptionType[] {
        return OptionAnswer.OPTION_CHARS.split("").map( ( _, index ) => (
            index === this.value ? OptionType.Correct : OptionType.None
        ) )
    }

    public isCorrect( result: OptionAnswer ): boolean {
        return this.value === result.value
    }

    public resultMap( result: OptionAnswer ): ResultOptionMap {
        return this.map.map( ( type, index ) => (
            type === OptionType.Correct ? ResultOptionType.Correct :
            ( result.value === index ? ResultOptionType.Mistake : ResultOptionType.None )
        ) )
    }

    public static validate( data: AnswerData ): boolean {
        return OptionAnswer.OPTION_CHARS.split("").includes( data ) || data === OptionAnswer.UNDEFINED_CHAR;
    }

    public static createDefault(): OptionAnswer {
        return new OptionAnswer( -1 );
    }

    public static createByData( data: AnswerData ): OptionAnswer {
        if ( !OptionAnswer.validate(data) ) {
            return OptionAnswer.createDefault();
        }
        return new OptionAnswer( OptionAnswer.OPTION_CHARS.indexOf(data) as OptionValue );
    }

    public static createByInput( input: OptionInput ): OptionAnswer {
        return new OptionAnswer( input );
    }
}

class RelationAnswer extends BaseAnswer implements IRelationAnswer {

    public static RELATION_LENGTH = 3;
    public readonly value : RelationValue;

    private constructor( value: RelationValue ) {
        super();
        this.value = value;
    }

    public get data(): AnswerData {
        return this.value.map( option => option.data ).join("");
    }

    public get missed(): boolean {
        return this.value.some( option => option.missed )
    }

    public get maps(): OptionMap[] {
        return this.value.map( option => option.map );
    }

    public get optionValues(): OptionValue[] {
        return this.value.map( option => option.value );
    }

    public correctCount( result: RelationAnswer ): number {
        return this.value.reduce<number>( ( count, option, index ) => (
            count + ( option.isCorrect( result.value[index] ) ? 1 : 0 )
        ), 0 )
    }

    public resultMaps( result: RelationAnswer ): ResultOptionMap[] {
        return this.value.map( ( option, index ) => option.resultMap( result.value[index] ) );
    }

    public static validate( data: string ): boolean {
        return data.length === RelationAnswer.RELATION_LENGTH && 
            data.split("").every( char => OptionAnswer.validate( char ) );
    }

    public static createDefault(): RelationAnswer {
        return new RelationAnswer( Array(RelationAnswer.RELATION_LENGTH).fill( OptionAnswer.createDefault() ) );
    }

    public static createByData( data: AnswerData ): RelationAnswer {
        if ( !RelationAnswer.validate(data) ) {
            return RelationAnswer.createDefault();
        }
        return new RelationAnswer( data.split("").map( char => OptionAnswer.createByData(char) ) as RelationValue );
    }

    public static createByInput( input: RelationInput ): RelationAnswer {
        return new RelationAnswer( input.map( OptionAnswer.createByInput ) );
    }
}

export default class Answer implements IAnswer {
    
    public readonly numerical: NumericalAnswer | undefined;
    public readonly option: OptionAnswer | undefined;
    public readonly relation: RelationAnswer | undefined;

    private constructor( params: { numerical?: NumericalAnswer, option?: OptionAnswer, relation?: RelationAnswer } ) {
        this.numerical = params.numerical;
        this.option = params.option;
        this.relation = params.relation;
    }

    public get type(): AnswerType {
        if ( this.option !== undefined ) {
            return "option"
        } else if ( this.relation !== undefined ) {
            return "relation"
        } else {
            return "numerical"
        }
    }

    public get missed(): boolean {
        return Boolean( this.numerical?.missed || this.option?.missed || this.relation?.missed )
    }

    public get data(): AnswerData {
        if ( this.numerical !== undefined ) {
            return this.numerical.data
        } else if ( this.option !== undefined ) {
            return this.option.data
        } else if ( this.relation !== undefined ) {
            return this.relation.data
        } else {
            return ""
        }
    }

    public correctCount( result: Answer ): number {
        if ( this.type !== result.type ) {
            return 0
        } else if ( this.type === "numerical" && result.numerical !== undefined ) {
            return this.numerical?.isCorrect( result.numerical ) ? 1 : 0
        } else if ( this.type === "option" && result.option !== undefined ) {
            return this.option?.isCorrect( result.option ) ? 1 : 0
        } else if ( this.type === "relation" && result.relation !== undefined ) {
            return this.relation?.correctCount( result.relation ) || 0
        } else {
            return 0
        }
    }

    public get totalCount(): number {
        if ( this.type === "relation" ) {
            return RelationAnswer.RELATION_LENGTH
        } else {
            return 1
        }
    }

    public static createDefault( type: AnswerType ): Answer {
        if ( type === "numerical" ) {
            return Answer.createNumerical()
        } else if ( type === "option" ) {
            return Answer.createOption()
        } else {
            return Answer.createRelation()
        }
    }

    public static createByData( data: AnswerData ): Answer {
        if ( RelationAnswer.validate(data) ) {
            return new Answer({ relation: RelationAnswer.createByData(data) })
        } else if ( OptionAnswer.validate(data) ) {
            return new Answer({ option: OptionAnswer.createByData(data) })
        } else {
            return new Answer({ numerical: NumericalAnswer.createByData(data) })
        }
    }

    public static createNumerical( input?: NumericalInput ): Answer {
        return new Answer({ numerical: (input !== undefined) ? NumericalAnswer.createByInput(input) : NumericalAnswer.createDefault() });
    }

    public static createOption( input?: OptionInput ): Answer {
        return new Answer({ option: (input !== undefined) ? OptionAnswer.createByInput(input) : OptionAnswer.createDefault() });
    }

    public static createRelation( input?: RelationInput ): Answer {
        return new Answer({ relation: (input !== undefined) ? RelationAnswer.createByInput(input) : RelationAnswer.createDefault() });
    }
}