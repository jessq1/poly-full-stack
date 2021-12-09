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
exports.getPayemnt = exports.indexProfilePayment = exports.indexPendingPayment = exports.indexIncompletePayment = exports.updateStatus = exports.delete = exports.index = exports.create = void 0;
const payment_1 = require("../models/payment");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
function create(expressRequest, res) {
    const req = expressRequest;
    req.body.initiator = req.user.profile;
    if (req.body.methodIsPay) {
        req.body.paymentFrom = req.user.profile;
        req.body.paymentTo = req.body.person;
    }
    else {
        req.body.paymentTo = req.user.profile;
        req.body.paymentFrom = req.body.person;
    }
    payment_1.Payment.create(req.body)
        .then(newPayment => {
        return createPaymentIntent(newPayment);
    })
        .then((payment) => {
        res.json(payment);
    });
}
exports.create = create;
function createPaymentIntent(payment) {
    return __awaiter(this, void 0, void 0, function* () {
        const paymentAmount = payment.amount;
        const accountPaymentTo = payment.paymentTo.stripeCustomerId;
        const accountPaymentFrom = payment.paymentFrom.stripeCustomerId;
        const paymentIntent = yield stripe.paymentIntents.create({
            payment_method_types: ['card'],
            amount: paymentAmount * 100,
            currency: 'usd',
            setup_future_usage: 'off_session',
            transfer_data: {
                destination: accountPaymentTo,
            },
        }, {
            stripeAccount: accountPaymentFrom,
        });
        payment.stripePaymentIntentId = paymentIntent.client_secret;
        payment.save();
        return payment;
    });
}
function index(expressRequest, res) {
    const req = expressRequest;
    payment_1.Payment.find({ 'completed': true })
        .populate([
        {
            path: 'initiator',
        },
        {
            path: 'paymentFrom',
        },
        {
            path: 'paymentTo',
        },
        {
            path: 'person',
        },
    ])
        .then(payments => {
        res.json(payments);
    });
}
exports.index = index;
function indexPendingPayment(expressRequest, res) {
    const req = expressRequest;
    const profileId = req.user.profile;
    payment_1.Payment.find({ 'initiator': profileId, 'completed': false })
        .populate([
        {
            path: 'initiator',
        },
        {
            path: 'paymentFrom',
        },
        {
            path: 'paymentTo',
        },
        {
            path: 'person',
        },
    ])
        .then(payments => {
        res.json(payments);
    });
}
exports.indexPendingPayment = indexPendingPayment;
function indexIncompletePayment(expressRequest, res) {
    const req = expressRequest;
    const profileId = req.user.profile;
    payment_1.Payment.find({ 'person': profileId, 'completed': false })
        .populate([
        {
            path: 'initiator',
        },
        {
            path: 'paymentFrom',
        },
        {
            path: 'paymentTo',
        },
        {
            path: 'person',
        },
    ])
        .then(payments => {
        res.json(payments);
    });
}
exports.indexIncompletePayment = indexIncompletePayment;
//return the 5 most recent payment
function indexProfilePayment(expressRequest, res) {
    const req = expressRequest;
    const profileId = req.user.profile;
    payment_1.Payment.find({
        'completed': true,
        $or: [
            { 'paymentFrom': profileId },
            { 'paymentTo': profileId }
        ]
    })
        .sort({ 'created': -1 })
        .limit(5)
        .populate([
        {
            path: 'initiator',
        },
        {
            path: 'paymentFrom',
        },
        {
            path: 'paymentTo',
        },
        {
            path: 'person',
        },
    ])
        .then(payments => {
        return payments.filter(p => p.completed);
    })
        .then(filterPayments => {
        res.json(filterPayments);
    });
}
exports.indexProfilePayment = indexProfilePayment;
function getPayemnt(expressRequest, res) {
    const req = expressRequest;
    payment_1.Payment.findById(req.params.id)
        .populate('initiator').populate('paymentFrom').populate('paymentTo').populate('person')
        .then(payments => {
        res.json(payments);
    });
}
exports.getPayemnt = getPayemnt;
function deletepayment(expressRequest, res) {
    const req = expressRequest;
    payment_1.Payment.findByIdAndDelete(req.params.id)
        .then(payment => {
        res.json(payment);
    });
}
exports.delete = deletepayment;
function updateStatus(expressRequest, res) {
    const req = expressRequest;
    payment_1.Payment.findByIdAndUpdate(req.params.id, { completed: true })
        .then(updatedPayment => {
        res.json(updatedPayment);
    });
}
exports.updateStatus = updateStatus;
