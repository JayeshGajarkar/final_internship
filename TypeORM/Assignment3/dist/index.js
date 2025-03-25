"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const queryRoutes_1 = __importDefault(require("./routes/queryRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.dbconnect)();
app.use("/query", queryRoutes_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
