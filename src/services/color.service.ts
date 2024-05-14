import axios, { AxiosInstance } from 'axios'
import { Color } from '../models/color.model'


const api: AxiosInstance = axios.create({
  baseURL: 'http://colormind.io/api/',
  headers: {
    'Content-Type': 'Application/json'
  }
})

class ColorService {
  public async generateColor (color: Color) {
    const { data } = await api.post('', {
      "model": "default",
      "input": color
    })

    console.log(data)

    return data.result
  }
}

export default ColorService