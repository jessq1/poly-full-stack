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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const profileSchema = new mongoose_1.default.Schema({
    email: String,
    firstName: String,
    lastName: String,
    avatar: {
        type: String,
        default: '/images/Account/user.svg'
    },
    balance: Number,
    created: { type: Date, default: Date.now },
    stripeCustomerId: String,
    stripeOnboard: { type: Boolean, default: false },
    friends: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Profile" }],
    payment: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Payment" }],
    events: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Event" }],
}, {
    timestamps: true,
});
profileSchema.methods.displayName = function () {
    return `${this.firstName} ${this.lastName.charAt(0)}.`;
};
profileSchema.statics.insertDefaultProfiles = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const defaulUsers = [{
                    firstName: 'Renata',
                    lastName: 'Jadranko',
                    email: 'Renata.Jadranko@example.com'
                }, {
                    firstName: 'Brian',
                    lastName: 'Disha',
                    email: 'Brian.Disha@example.com'
                }, {
                    firstName: 'Myrtle',
                    lastName: 'Bill',
                    email: 'Myrtle.Bill@example.com'
                }, {
                    firstName: 'Jack',
                    lastName: 'Rene',
                    email: 'Jack.Rene@example.com'
                }, {
                    firstName: 'Jane',
                    lastName: 'White',
                    email: 'Jane.White@example.com'
                }];
            for (let object of defaulUsers) {
                const profile = new Profile(object);
                const customer = yield stripe.customers.create({
                    email: profile.email,
                    description: profile.displayName()
                });
                profile.stripeCustomerId = customer.id;
                yield profile.save();
            }
        }
        catch (err) {
            console.log(err);
        }
    });
};
const Profile = mongoose_1.default.model('Profile', profileSchema);
exports.Profile = Profile;
