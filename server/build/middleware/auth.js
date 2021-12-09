"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = exports.decodeUserFromToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.SECRET;
const decodeUserFromToken = ((expressRequest, res, next) => {
    const req = expressRequest;
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        token = token.replace('Bearer ', '');
        jsonwebtoken_1.default.verify(token, SECRET, (err, decoded) => {
            if (err) {
                next(err);
            }
            else {
                req.user = decoded === null || decoded === void 0 ? void 0 : decoded.user;
                next();
            }
        });
    }
    else {
        next();
    }
});
exports.decodeUserFromToken = decodeUserFromToken;
const checkAuth = (expressRequest, res, next) => {
    const req = expressRequest;
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' });
};
exports.checkAuth = checkAuth;
