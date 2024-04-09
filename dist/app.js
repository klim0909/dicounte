"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = __importDefault(require("./Cart"));
var cart = new Cart_1.default;
cart.add({
    year: 2012,
    country: "США",
    slogan: "LET'S GO",
    genre: "Ужасы, боевик,",
    time: "103 мин / 02:17",
    prise: 3000,
    discounte: 5
});
console.log(cart.items);
//# sourceMappingURL=app.js.map