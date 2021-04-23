import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    })
    .then(db => console.log('Db is conected'))
    .catch(err => console.log(err));

export default mongoose;