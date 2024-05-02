import { Router } from 'express'
import BibleController from '../controllers/bible.controller'

const router = Router()

// Bible
router.get('/bible/version', BibleController.getVersion)
router.get('/bible/books', BibleController.getBooks)
router.get('/bible/books/:abbrev', BibleController.getBookByAbbreviation)
router.get('/bible/chapter/:version/:abbrev/:chapter', BibleController.getChapter)

export default router
