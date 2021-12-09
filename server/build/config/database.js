"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
const db = mongoose_1.default.connection;
const dbUrl = process.env.DATABASE_URL;
mongoose_1.default.connect(dbUrl).
    catch(error => {
    logger_1.default.error("Could not connect to db");
    process.exit(1);
});
// database connection event
db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
