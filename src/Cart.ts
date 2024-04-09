import Buyable from "./Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getTotalCost(): number {
        return this._items.reduce((total, item) => total + item.prise, 0);
    }

    getTotalCostWithDiscount(discount: number): number {
        const totalCost = this.getTotalCost();
        const discountedCost = totalCost - (totalCost * discount) / 100;
        return discountedCost;
    }

    removeItemById(id: number): void {
        const index = this._items.findIndex(item => item.year === id); // Используем 'year' для определения уникальности элемента
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}
