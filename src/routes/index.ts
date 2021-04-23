import { Router } from 'express';
import seguimientoRouter from './seguimiento.routes';

const router: Router = Router();
router.use('/seguimientos', seguimientoRouter);  

/* lo exportamos para poder reutilizar esta pieza de código */
export default router;
