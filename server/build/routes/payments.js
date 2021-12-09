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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const paymentsCtrl = __importStar(require("../controllers/payments"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
exports.router = router;
/*---------- Public Routes ----------*/
router.get('/', paymentsCtrl.index);
/*---------- Protected Routes ----------*/
router.use(auth_1.decodeUserFromToken);
router.post('/', auth_1.checkAuth, paymentsCtrl.create);
router.delete('/:id', auth_1.checkAuth, paymentsCtrl.delete);
router.patch('/:id', auth_1.checkAuth, paymentsCtrl.updateStatus);
router.get('/', auth_1.checkAuth, paymentsCtrl.index);
router.get('/incomplete', auth_1.checkAuth, paymentsCtrl.indexIncompletePayment);
router.get('/pending', auth_1.checkAuth, paymentsCtrl.indexPendingPayment);
router.get('/profile', auth_1.checkAuth, paymentsCtrl.indexProfilePayment);
router.get('/:id', auth_1.checkAuth, paymentsCtrl.getPayemnt);
