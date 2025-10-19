"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.User = void 0;
const Person_1 = require("./Person");
class User extends Person_1.Person {
    constructor(id, name, role = 'User') {
        super(id, name, role);
    }
}
exports.User = User;
class Admin extends Person_1.Person {
    constructor(id, name) {
        super(id, name, 'Admin');
    }
}
exports.Admin = Admin;
