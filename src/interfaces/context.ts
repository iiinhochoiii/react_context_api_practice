import { Cart } from './models/cart';
import { Fruits } from './models/fruits';

export interface Context {
  cart: Cart[];
  increase: (item: Fruits) => void;
  decrease: (item: Fruits) => void;
  remove: (id: number) => void;
  clear: () => void;
}
