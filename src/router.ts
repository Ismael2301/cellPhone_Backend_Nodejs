import {Application} from 'express';
import { createCellPhone, deleteCellPhone, listCellPhone, retrieveCellPhone, updateCellPhone } from './controllers/cellPhone.controller';

export const router = (app : Application) => {
    app.post("/products"  , createCellPhone);
    app.get("/products/:id"  , retrieveCellPhone);
    app.put("/products/:id"  , updateCellPhone);
    app.delete("/products/:id"  , deleteCellPhone);
    app.get("/products"  , listCellPhone);
}