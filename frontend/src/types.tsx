export type Coffee = {
  id?: number

  name: string

  type: string
}

export type Fruit = {
  id?: number

  name: string

  color: string
}

export type User = {
  id?: number

  username: string

  passwordHash: string
}

export type CoffeeError = any

export type FruitError = any

export type UserError = any

export type LoginValues = {
  username: string
  password: string
}

export type RegisterValues = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}
