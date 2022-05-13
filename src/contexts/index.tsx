import React, { createContext, useState } from 'react';
import { Cart } from 'interfaces/models/cart';
import { Context } from 'interfaces/context';

export const AppContext = createContext<Context>({
  cart: [],
  increase: () => null,
  decrease: () => null,
});

interface Props {
  children: React.ReactNode;
}

const Store = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = useState<Cart[]>([]);

  const increase = (id: number) => {
    console.log(id);
  };

  const decrease = (id: number) => {
    console.log(id);
  };

  return (
    <AppContext.Provider value={{ cart, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export default Store;
