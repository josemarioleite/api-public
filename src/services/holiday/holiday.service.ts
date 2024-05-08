import axios, { AxiosInstance } from 'axios'
import { Holiday } from '../../models/holiday.model'


const api: AxiosInstance = axios.create({
  baseURL: 'https://date.nager.at/api/v3/PublicHolidays/',
  headers: {
    'Content-Type': 'Application/json'
  }
})

class HolidayService {
  private filterHolidayData (originalDataArray: any[]) {
    const holidays: Array<Holiday> = originalDataArray.map(({ date, localName, name, countryCode, global }) => ({ date, localName, name, countryCode, global }))
    return holidays
  }

  public async getHolidays (year: string, countryCode: string) {
    const { data } = await api.get(`${year}/${countryCode}`)

    return this.filterHolidayData(data)
  }
}

export default HolidayService