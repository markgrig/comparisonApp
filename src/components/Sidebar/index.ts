export interface IMenuOption{
    text: string
    style?: {
      uppercase?: boolean
    }
    icoUrl?: string
}

export interface IMenu {
  left: Array<IMenuOption>
  right: Array<IMenuOption>
}