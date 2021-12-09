"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config.js");
const express = require('express');
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//routes:
const auth_1 = require("./routes/auth");
const profiles_1 = require("./routes/profiles");
const payments_1 = require("./routes/payments");
//config:
Promise.resolve().then(() => __importStar(require('./config/database')));
const app = express();
// app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express.json());
app.use('/api/profiles', profiles_1.router);
app.use('/api/auth', auth_1.router);
app.use('/api/payments', payments_1.router);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Express is listening on port ${port}.`);
});
