"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const user_js_1 = require("../models/user.js");
function index(req, res) {
    user_js_1.User.find({})
        .then(users => res.json(users));
}
exports.index = index;
