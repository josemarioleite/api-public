import axios, { AxiosInstance } from 'axios'
import { Book, Chapter, VersionEnum, Version } from '../../models/bible.model'

const token = process.env.TOKEN_BIBLE || ''

const api: AxiosInstance = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api/',
  headers: {
    'Content-Type': 'Application/json',
    'Authorization': `Bearer ${token}`
  }
})

class Bible {
  private generateNumbers (length: number): Array<number> {
    return Array.from({ length }, (_, index) => index + 1)
  }

  public async getBooks (abbreviation?: string): Promise<Book | Array<Book>> {
    if (abbreviation) {
      const { data } = await api.get(`books/${abbreviation}`)

      const book: Book = data as Book

      book.chapters = this.generateNumbers(data.chapters)

      return data as Book
    } else {
      const { data } = await api.get('books')

      return data as Array<Book>
    }
  }

  public async getChapter (abbrev: string, chapter: number, version: string) {
    const { data } = await api.get(`verses/${version}/${abbrev}/${chapter}`)

    const chapterBible: Chapter = {
      total: data.chapter.verses,
      verses: data.verses
    }

    return chapterBible
  }

  public async getVersion () {
    try {
      const { data } = await api.get('versions')

      if (Array.isArray(data)) {
          const versions: Version[] = []

          for (const versionData of data) {
            if (versionData.version in VersionEnum) {
              const version: Version = {
                name: VersionEnum[versionData.version as keyof typeof VersionEnum],
                abbrev: versionData.version
              }

              versions.push(version)
            } else {
              console.error("Versão inválida:", versionData.version)
            }
          }
        return versions
      } else {
        return null
      }
    } catch (error) {
      return null
    }
  }
}

export default Bible