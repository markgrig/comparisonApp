export interface IQuery {
    name: string,
    url: string
}

export interface IItem {
    name: string
    img: string
    id: number
    main: {
        [word: string]: string | number | boolean
    }
}

export interface ITableProperty {
    [word: string]: string
}

export type dictionary =  {
    [word: string]: Array<string|number|boolean>
}

export type booleanDictionary =  {
    [word: string]: boolean
}


