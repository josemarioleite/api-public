import axios, { AxiosInstance } from 'axios'
import { Color, CorRGB } from '../models/color.model'


const api: AxiosInstance = axios.create({
  baseURL: 'http://colormind.io/api/',
  headers: {
    'Content-Type': 'Application/json'
  }
})

class ColorService {
  public async generateColor (color: CorRGB) {
    const { data } = await api.post('', {
      "model": "default",
      "input": [color, "N", "N", "N", "N"]
    })

    const result = data.result as Color
    return  result
  }
}

export default ColorService