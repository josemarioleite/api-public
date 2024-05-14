import { Response, Request } from 'express'
import ColorService from '../services/color.service'

const colorsService = new ColorService()

class ColorController {
  public static async generateColor(request: Request, response: Response) {
    try {
      const { colors } = request.body
      const result = await colorsService.generateColor(colors)

      return response.status(200).json(result)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao gerar as cores' })
    }
  }
}

export default ColorController