import Cart from './Cart';
import Buyable from './Buyable';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should add items to the cart', () => {
    const item: Buyable = {
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

  it('should return a copy of items array', () => {
    const item: Buyable = {
      year: 2012,
      country: "США",
      slogan: "LET'S GO",
      genre: "Ужасы, боевик",
      time: "103 мин / 02:17",
      prise: 3000,
    };

    cart.add(item);
    const itemsCopy = cart.items;
    expect(itemsCopy).toEqual(cart.items); 
    expect(itemsCopy).not.toBe(cart.items); 
  });
});
