"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 6;
const userSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    profile: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Profile" }
}, {
    timestamps: true,
});
userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    },
});
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt_1.default.hash(user.password, SALT_ROUNDS)
        .then(hash => {
        user.password = hash;
        next();
    })
        .catch(err => {
        next(err);
    });
});
userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt_1.default.compare(tryPassword, this.password, cb);
};
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
