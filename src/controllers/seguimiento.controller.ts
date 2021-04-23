import Seguimiento, { ISeguimiento } from '../models/seguimiento.model';
import { Request, Response } from 'express';

export const getSeguimientos = async (_req: Request, res: Response) => {
    try {
        const casos: ISeguimiento[] = await Seguimiento.find();
        res.json(casos);
    } catch (err) {
        res.status(500).json({
            status: `${err.message}`
        });
    }
}

export const createSeguimiento = async (req: Request, res: Response) => {
    try {
        const seguimiento: ISeguimiento = new Seguimiento({
            nombre: req.body.nombre,
            fechaSeguimiento: req.body.fechaSeguimiento,
            dni: req.body.dni,
            telefono: req.body.telefono,
            fiebre: req.body.fiebre,
            tosContinuaPersistente: req.body.tosContinuaPersistente,
            dificultadRespiratoria: req.body.dificultadRespiratoria,
            malestarGeneral: req.body.malestarGeneral,
        });
        await seguimiento.save();
        res.json({
            status: 'Saved Succesfully'
        });
    } catch (err) {
        res.status(500).json({
            status: `${err.message}`
        });
    }
}

export const getSeguimiento = async (req: Request, res: Response) => {
    try {
        const seguimiento = await Seguimiento.findById(req.params.id);
        res.json(seguimiento);
    } catch (err) {
        res.status(500).json({
            status: `${err.message}`
        });
    }
}

export const editSeguimiento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates: ISeguimiento = req.body;
    try {
        await Seguimiento.findByIdAndUpdate(id, { $set: updates }, { new: true });
        res.json({
            status: 'Updated Succesfully'
        });
    } catch (err) {
        res.status(500).json({
            status: `${err.message}`
        });
    }
}

export const deleteSeguimiento = async (req: Request, res: Response) => {
    try {
        await Seguimiento.findByIdAndDelete(req.params.id);
        res.json({
            status: 'Deleted Succesfully'
        });
    } catch (err) {
        res.status(500).json({
            status: `${err.message}`
        });
    }
}

export default { getSeguimientos, createSeguimiento, getSeguimiento, editSeguimiento, deleteSeguimiento }