import { Response, Request } from 'express'
import BibleClass from '../services/bible.service'

const Bible = new BibleClass()

class BibleController {
  public static async getBooks (_: any, response: Response) {
    try {
      const booksData = await Bible.getBooks()

      return response.status(200).json(booksData)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter livros da Bíblia' })
    }
  }

  public static async getBookByAbbreviation (request: Request, response: Response) {
    try {
      const { abbrev } = request.params
      const bookData = await Bible.getBooks(abbrev)

      return response.status(200).json(bookData)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter o livro da Bíblia' })
    }
  }

  public static async getChapter (request: Request, response: Response) {
    try {
      const { abbrev, chapter, version } = request.params

      const chapterBible = await Bible.getChapter(abbrev, parseInt(chapter), version)

      return response.status(200).json(chapterBible)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter o capítulo da Bíblia' })
    }
  }

  public static async getVersion ({}, response: Response) {
    try {
      const version = await Bible.getVersion()

      return response.status(200).json(version)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter as versões da Bíblia' })
    }
  }
}

export default BibleController