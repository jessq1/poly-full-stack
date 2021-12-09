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
exports.login = exports.signup = void 0;
const user_1 = require("../models/user");
const profile_1 = require("../models/profile");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const siteUrl = process.env.SITE_URL;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.User.findOne({ email: req.body.email });
            if (!user)
                return res.status(401).json({ err: "bad credentials" });
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch) {
                    const token = createJWT(user);
                    res.json({ token });
                }
                else {
                    return res.status(401).json({ err: "bad credentials" });
                }
            });
        }
        catch (err) {
            return res.status(400).json(err);
        }
    });
}
exports.login = login;
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const profile = new profile_1.Profile(req.body);
        req.body.profile = profile._id;
        const user = new user_1.User(req.body);
        const account = yield stripe.accounts.create({
            type: 'custom',
            country: 'US',
            email: req.body.email,
            capabilities: {
                card_payments: { requested: true },
                transfers: { requested: true },
            },
        });
        profile.stripeCustomerId = account.id;
        try {
            yield user.save();
            yield profile.save();
            const token = createJWT(user);
            res.json({ token });
        }
        catch (err) {
            res.status(400).send({ err: err.errmsg });
        }
    });
}
exports.signup = signup;
/*----- Helper Functions -----*/
function createJWT(user) {
    return jsonwebtoken_1.default.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
