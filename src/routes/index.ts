import { Router } from 'express'
import BibleController from '../controllers/bible.controller'
import HolidayController from '../controllers/holiday.controller'
import ColorController from '../controllers/color.controller'

const router = Router()

// Bible
router.get('/bible/version', BibleController.getVersion)
router.get('/bible/books', BibleController.getBooks)
router.get('/bible/books/:abbrev', BibleController.getBookByAbbreviation)
router.get('/bible/chapter/:version/:abbrev/:chapter', BibleController.getChapter)

// Holiday
router.get('/holiday/:year/:countryCode', HolidayController.getHoliday)

// Colors Generator
router.post('/colors', ColorController.generateColor)

export default router
