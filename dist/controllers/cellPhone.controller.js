"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCellPhone = exports.listCellPhone = exports.updateCellPhone = exports.retrieveCellPhone = exports.createCellPhone = void 0;
const cellPhone_models_1 = require("../models/cellPhone.models");
const createCellPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, color, releaseDate, operatingSystem, weight } = req.body;
    const response = yield new CellPhoneController().create({ name, color, releaseDate, operatingSystem, weight });
    return res.status(response.status).json(response);
});
exports.createCellPhone = createCellPhone;
const retrieveCellPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new CellPhoneController().retrieve(docId);
    return res.status(response.status).json(response);
});
exports.retrieveCellPhone = retrieveCellPhone;
const updateCellPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, color, releaseDate, operatingSystem, weight } = req.body;
    const docId = req.params.id;
    const response = yield new CellPhoneController().update(docId, { name, color, releaseDate, operatingSystem, weight });
    return res.status(response.status).json(response);
});
exports.updateCellPhone = updateCellPhone;
const listCellPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield new CellPhoneController().list();
    return res.status(response.status).json(response);
});
exports.listCellPhone = listCellPhone;
const deleteCellPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new CellPhoneController().delete(docId);
    return res.status(response.status).json(response);
});
exports.deleteCellPhone = deleteCellPhone;
class CellPhoneController {
    //Create a new CellPhone in the database (save)
    create(cellPhone) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new cellPhone_models_1.CellPhone(cellPhone);
            return product.save().then(data => {
                return {
                    message: "CREATED: CellPhone added to database",
                    status: 201,
                    content: data
                };
            }).catch(err => {
                return { message: "Error on create CellPhone",
                    status: 500,
                    content: err
                };
            });
        });
    }
    //Retrive a cellPhone from the database
    retrieve(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return cellPhone_models_1.CellPhone.findOne({ _id: docId }).then(data => {
                if (data === null) {
                    return {
                        message: "NOT FOUND: CellPhone not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: CellPhone retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    //Update a cellPhone in the database
    update(docId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return cellPhone_models_1.CellPhone.updateOne({ _id: docId }, { $set: {
                    name: payload.name,
                    color: payload.color,
                    releaseDate: payload.releaseDate,
                    operatingSystem: payload.operatingSystem,
                    weight: payload.weight
                } }).then(data => {
                return {
                    message: "OK: CellPhone updated",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: CellPhone not updated",
                    status: 500,
                    content: err
                };
            });
        });
    }
    //Delete a cellPhone from the database
    delete(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return cellPhone_models_1.CellPhone.deleteOne({ _id: docId }).then(data => {
                if (data.deletedCount == 0) {
                    return {
                        message: "NOT FOUND: CellPhone not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: CellPhone deleted",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    //List all CellPhone from the database
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return cellPhone_models_1.CellPhone.find({}).then(data => {
                return {
                    message: "OK: All CellPhone retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return { message: "Error on retrieve CellPhone", status: 500, content: err };
            });
        });
    }
}
