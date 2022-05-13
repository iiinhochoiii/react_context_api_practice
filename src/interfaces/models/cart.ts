import { Fruits } from './fruits';

export interface Cart {
  id: number;
  quantity: number;
  fruits: Fruits;
}
