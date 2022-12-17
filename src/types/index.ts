export type State = 'check' | 'warning' | 'error'

export interface Part {
  name: string
  features: Feature[]
}

export interface Feature {
  name: string
  state: State
  controls: Control[]
}

export interface Control {
  name: string
  dev: number
  devOut: number
  state: State
}
