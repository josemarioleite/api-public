import { Response, Request } from 'express'
import HolidayClass from '../services/holiday.service'

const holiday = new HolidayClass()

class HolidayController {
  public static async getHoliday(request: Request, response: Response) {
    try {
      const { year, countryCode } = request.params
      const dataHolidays = await holiday.getHolidays(year, countryCode)

      return response.status(200).json(dataHolidays)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter livros da Bíblia' })
    }
  }
}

export default HolidayController