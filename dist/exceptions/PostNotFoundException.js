"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_exception_1 = __importDefault(require("./HttpException.exception"));
class PostNotFoundException extends HttpException_exception_1.default {
    constructor(id) {
        super(404, `Post with id ${id} not found`);
    }
}
exports.default = PostNotFoundException;
