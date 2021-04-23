import mongoose, { Schema, model } from 'mongoose';

export interface ISeguimiento extends mongoose.Document {
    nombre: string;
    fechaSeguimiento: Date;
    dni: string;
    telefono: number;
    fiebre: string;
    tosContinuaPersistente: string;
    dificultadRespiratoria: string;
    malestarGeneral: string;
}

const SeguimientoSchema = new Schema({
    nombre: { type: String, required: true }, 
    fechaSeguimiento: { type: Date, required: true },
    dni: { type: String, unique: true, required: true },
    telefono: { type: Number, required: true },
    fiebre: { type: String, required: true },
    tosContinuaPersistente: { type: String, required: true },
    dificultadRespiratoria: { type: String, required: true },
    malestarGeneral: { type: String, required: true }
}, {
    versionKey: false
});

export default model<ISeguimiento>('Seguimiento', SeguimientoSchema);