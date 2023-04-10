interface IElement{
    text: string
    style?: {
      uppercase?: boolean
    }
    icoUrl?: string
  }

  export type arrayElement = Array<IElement>
  export type element = IElement