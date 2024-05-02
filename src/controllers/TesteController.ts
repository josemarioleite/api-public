import { Response } from 'express'

class HelloController {
  public static async sayHello ({}, response: Response) {
    return response.status(200).json({ message: 'Hello World' })
  }
}

export default HelloController