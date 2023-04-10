import type { element } from './ElementList/type'

export interface IPannels {
  leftPannel: Array<element>
  rightPannel: Array<element>
}

export interface IMobileMenu {
  isOpen: boolean,
}

export type className = string