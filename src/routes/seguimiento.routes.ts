import { Router } from 'express';
import seguimientoCtrl from '../controllers/seguimiento.controller';

const seguimientoRouter: Router = Router();

seguimientoRouter.get('/', seguimientoCtrl.getSeguimientos);

seguimientoRouter.post('/', seguimientoCtrl.createSeguimiento);

seguimientoRouter.get('/:id', seguimientoCtrl.getSeguimiento);

seguimientoRouter.put('/:id', seguimientoCtrl.editSeguimiento);

seguimientoRouter.delete('/:id', seguimientoCtrl.deleteSeguimiento);

export default seguimientoRouter;