import {Application} from 'express';
import { createCellPhone, deleteCellPhone, listCellPhone, retrieveCellPhone, updateCellPhone } from './controllers/cellPhone.controller';

export const router = (app : Application) => {
    app.post("/cellPhone"  , createCellPhone);
    app.get("/cellPhone/:id"  , retrieveCellPhone);
    app.put("/cellPhone/:id"  , updateCellPhone);
    app.delete("/cellPhone/:id"  , deleteCellPhone);
    app.get("/cellPhone"  , listCellPhone);
}