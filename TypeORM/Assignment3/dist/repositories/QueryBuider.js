"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const db_1 = require("../config/db");
const product_1 = require("../entities/product");
exports.productRepository = db_1.AppDataSource.getRepository(product_1.Product);
