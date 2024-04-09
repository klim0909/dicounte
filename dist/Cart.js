"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.getTotalCost = function () {
        return this._items.reduce(function (total, item) { return total + item.prise; }, 0);
    };
    Cart.prototype.getTotalCostWithDiscount = function (discount) {
        var totalCost = this.getTotalCost();
        var discountedCost = totalCost - (totalCost * discount) / 100;
        return discountedCost;
    };
    Cart.prototype.removeItemById = function (id) {
        var index = this._items.findIndex(function (item) { return item.year === id; }); // Используем 'year' для определения уникальности элемента
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map