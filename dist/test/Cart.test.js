"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = __importDefault(require("../Cart"));
describe('Cart', function () {
    var cart;
    beforeEach(function () {
        cart = new Cart_1.default();
    });
    it('should add items to the cart', function () {
        var item = {
            year: 2012,
            country: "США",
            slogan: "LET'S GO",
            genre: "Ужасы, боевик",
            time: "103 мин / 02:17",
            prise: 3000,
        };
        cart.add(item);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toEqual(item);
    });
    it('should return a copy of items array', function () {
        var item = {
            year: 2012,
            country: "США",
            slogan: "LET'S GO",
            genre: "Ужасы, боевик",
            time: "103 мин / 02:17",
            prise: 3000,
        };
        cart.add(item);
        var itemsCopy = cart.items;
        expect(itemsCopy).toEqual(cart.items);
        expect(itemsCopy).not.toBe(cart.items);
    });
});
//# sourceMappingURL=Cart.test.js.map