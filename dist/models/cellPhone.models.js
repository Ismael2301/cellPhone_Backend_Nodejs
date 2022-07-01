"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellPhone = void 0;
const mongoose_1 = require("mongoose");
//Schema 
const cellPhoneSchema = new mongoose_1.Schema({
    name: { type: String },
    color: { type: String },
    releaseDate: { type: Date },
    operatingSystem: { type: String },
    weight: { type: Number }
});
//Model
const CellPhone = (0, mongoose_1.model)('CellPhone', cellPhoneSchema);
exports.CellPhone = CellPhone;
