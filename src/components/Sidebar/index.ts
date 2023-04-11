export interface IElement{
    text: string
    style?: {
      uppercase?: boolean
    }
    icoUrl?: string
}

export interface IPannels {
  leftPannel: Array<IElement>
  rightPannel: Array<IElement>
}

export interface IMobileMenu {
  isOpen: boolean,
}

export type className = string