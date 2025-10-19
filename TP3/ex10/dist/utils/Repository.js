"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        if (this.items.some((i) => i.id === item.id)) {
            throw new Error(`Item with id ${item.id} already exists`);
        }
        this.items.push(item);
    }
    remove(predicate) {
        this.items = this.items.filter((item) => !predicate(item));
    }
    find(predicate) {
        return this.items.find(predicate);
    }
    findById(id) {
        return this.items.find((item) => item.id === id);
    }
    findAll(predicate) {
        return predicate ? this.items.filter(predicate) : [...this.items];
    }
    getAll() {
        return [...this.items];
    }
    update(id, updateData) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1)
            return undefined;
        this.items[index] = { ...this.items[index], ...updateData };
        return this.items[index];
    }
}
exports.Repository = Repository;
