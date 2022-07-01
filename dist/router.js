"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const product_controller_1 = require("./controllers/product.controller");
const router = (app) => {
    app.post("/products", product_controller_1.createProduct);
    app.get("/products/:id", product_controller_1.retrieveProduct);
    app.put("/products/:id", product_controller_1.updateProduct);
    app.delete("/products/:id", product_controller_1.deleteProduct);
    app.get("/products", product_controller_1.listProduct);
};
exports.router = router;
