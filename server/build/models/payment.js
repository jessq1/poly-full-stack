"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const paymentSchema = new mongoose_1.default.Schema({
    amount: Number,
    initiator: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Profile" },
    person: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Profile" },
    paymentFrom: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Profile" },
    paymentTo: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Profile" },
    methodIsPay: { type: Boolean, default: true },
    note: String,
    completed: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    stripePaymentIntentId: String,
    created: { type: Date, default: Date.now },
}, {
    timestamps: true,
});
const Payment = mongoose_1.default.model('Payment', paymentSchema);
exports.Payment = Payment;
