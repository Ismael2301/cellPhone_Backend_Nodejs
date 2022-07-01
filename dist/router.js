"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const cellPhone_controller_1 = require("./controllers/cellPhone.controller");
const router = (app) => {
    app.post("/cellPhone", cellPhone_controller_1.createCellPhone);
    app.get("/cellPhone/:id", cellPhone_controller_1.retrieveCellPhone);
    app.put("/cellPhone/:id", cellPhone_controller_1.updateCellPhone);
    app.delete("/cellPhone/:id", cellPhone_controller_1.deleteCellPhone);
    app.get("/cellPhone", cellPhone_controller_1.listCellPhone);
};
exports.router = router;
