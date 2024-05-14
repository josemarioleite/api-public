import { translate } from '@vitalets/google-translate-api'

export async function Translate(paramText: string) {
  return await translate(paramText, { to: 'pt' })
    .then(res => res.text)
    .catch(err => {
      return Promise.reject(err)
    })
}
