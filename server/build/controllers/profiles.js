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
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfriend = exports.friend = exports.checkStripeOnboarding = exports.stripeAuthLink = exports.index = exports.userProfile = void 0;
const profile_1 = require("../models/profile");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const siteUrl = process.env.SITE_URL;
function index(expressRequest, res) {
    const req = expressRequest;
    profile_1.Profile.find({ stripeOnboard: true, _id: { $ne: req.user.profile } })
        .populate('friends')
        .populate('payment')
        .then(profiles => {
        res.json(profiles);
    });
}
exports.index = index;
function userProfile(expressRequest, res) {
    var _a;
    const req = expressRequest;
    profile_1.Profile.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.profile)
        .populate('friends')
        .populate('payment')
        .then(profile => {
        return checkStripeOnboarding(profile);
    }).then(profile => {
        res.json(profile);
    });
}
exports.userProfile = userProfile;
function stripeAuthLink(expressRequest, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = expressRequest;
        const profile = yield profile_1.Profile.findById(req.user.profile);
        const accountLink = yield stripe.accountLinks.create({
            account: profile.stripeCustomerId,
            refresh_url: siteUrl + '/login',
            return_url: siteUrl + '/',
            type: 'account_onboarding',
        });
        res.json(accountLink);
    });
}
exports.stripeAuthLink = stripeAuthLink;
function checkStripeOnboarding(profile) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountId = profile.stripeCustomerId;
        const account = yield stripe.accounts.retrieve(accountId);
        if (account.charges_enabled) {
            profile.stripeOnboard = true;
            profile.save();
        }
        return profile;
    });
}
exports.checkStripeOnboarding = checkStripeOnboarding;
function friend(expressRequest, res) {
    const req = expressRequest;
    profile_1.Profile.findById(req.user.profile)
        .then(profile => {
        profile.friends.push(req.params.id);
        return profile.save();
    })
        .then(profile => {
        return profile.populate('friends').populate('payment');
    })
        .then((profile) => {
        res.json(profile);
    });
}
exports.friend = friend;
function unfriend(expressRequest, res) {
    const req = expressRequest;
    profile_1.Profile.findById(req.user.profile)
        .populate('friends')
        .populate('payment')
        .then(profile => {
        profile.friends.remove({ _id: req.params.id });
        profile.save()
            .then(() => {
            res.json(profile);
        });
    });
}
exports.unfriend = unfriend;
