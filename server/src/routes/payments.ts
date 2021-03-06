import { Router } from 'express'
import * as paymentsCtrl from '../controllers/payments'
import { decodeUserFromToken, checkAuth } from '../middleware/auth'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', paymentsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, paymentsCtrl.create)
router.delete('/:id', checkAuth, paymentsCtrl.delete)
router.patch('/:id', checkAuth, paymentsCtrl.updateStatus)
router.get('/', checkAuth, paymentsCtrl.index)
router.get('/incomplete', checkAuth, paymentsCtrl.indexIncompletePayment)
router.get('/pending', checkAuth, paymentsCtrl.indexPendingPayment)
router.get('/profile', checkAuth, paymentsCtrl.indexProfilePayment)
router.get('/:id', checkAuth, paymentsCtrl.getPayemnt)




export { router }