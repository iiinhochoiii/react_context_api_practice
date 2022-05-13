import React, { createContext, useState } from 'react';
import { Cart } from 'interfaces/models/cart';
import { Fruits } from 'interfaces/models/fruits';
import { Context } from 'interfaces/context';

export const AppContext = createContext<Context>({
  cart: [],
  increase: () => null, // 장바구니 담기
  decrease: () => null, // 장바구니 빼기
  remove: () => null, // 취소
  clear: () => null, // 결제하기 (장바구니 비우기)
});

interface Props {
  children: React.ReactNode;
}

const Store = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = useState<Cart[]>([]);

  const increase = (item: Fruits) => {
    const findByCart = cart.find((c) => c.id === item.id);

    if (findByCart) {
      setCart(
        cart.map((c) =>
          c.id === item.id
            ? {
                ...c,
                quantity: c.quantity + 1,
              }
            : c
        )
      );
    } else {
      setCart((state) => [
        ...state,
        {
          id: item.id,
          quantity: 1,
          fruit: item,
        },
      ]);
    }
  };

  const decrease = (item: Fruits) => {
    const findByCart = cart.find((c) => c.id === item.id);

    if (findByCart) {
      if (findByCart.quantity === 1) {
        setCart(cart.filter((c) => c.id !== item.id));
      } else {
        setCart(
          cart.map((c) =>
            c.id === item.id
              ? {
                  ...c,
                  quantity: c.quantity - 1,
                }
              : c
          )
        );
      }
    }
  };

  const remove = (id: number) => {
    if (id) {
      setCart(cart.filter((c) => c.id !== id));
    }
  };

  const clear = () => {
    if (cart.length > 0) {
      setCart([]);
    } else {
      alert('장바구니에 담긴 과일이 없습니다.');
    }
  };

  return (
    <AppContext.Provider value={{ cart, increase, decrease, remove, clear }}>
      {children}
    </AppContext.Provider>
  );
};

export default Store;
