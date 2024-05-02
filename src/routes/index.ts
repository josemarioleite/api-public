import { Router } from 'express'
import HelloController from '../controllers/TesteController'

const router = Router()

// Teste
router.get('/teste', HelloController.sayHello)

export default router
