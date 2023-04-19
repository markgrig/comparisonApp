
export interface IMenuOption{
    text: string
    style?: {
      uppercase?: boolean
    }
    icoUrl?: string
}

export type menuOption = IMenuOption