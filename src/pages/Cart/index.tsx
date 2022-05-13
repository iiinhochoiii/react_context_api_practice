/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import BaseTemplates from 'components/templates/Base';
import * as S from './style';
import { AppContext } from 'contexts';
import { PrimeText, UnderLine, Button } from 'components/atoms';
import { CardCart } from 'components/organisms';
import { comma } from 'utils/comma';
import { Cart } from 'interfaces/models/cart';
import { Fruits } from 'interfaces/models/fruits';
import { groupBy } from 'utils/groupby';

const CartPage = () => {
  const { cart, clear } = useContext(AppContext);
  const [totalPrime, setTotalPrime] = useState(0);
  const [totalNormal, setTotalNormal] = useState(0);
  const [sortCart, setSortCart] = useState<Array<Cart | undefined>>([]);

  useEffect(() => {
    if (cart.length > 0) {
      // prime 과일이 먼저 나오도록 정렬
      // isPrime (key) 값을 가지고 group by 작업 (ex: {'true' : [], 'false': []} 형식 데이터)
      const sortObj = groupBy<Fruits>(
        cart.map((c) => c.fruit),
        'isPrime'
      );

      // spread 연산자로, prime 과일 부터 먼저 나오도록
      let spreadArr: Cart[] = [];

      if (sortObj['true']) {
        spreadArr = [...spreadArr, ...sortObj['true']];
      }

      if (sortObj['false']) {
        spreadArr = [...spreadArr, ...sortObj['false']];
      }

      // 정렬된 배열 (spreadArr) 순서에 맞게, Cart 형식으로 변경
      setSortCart(spreadArr.map((arr) => cart.find((c) => c.id === arr.id)));

      // Prime 과일 금액 합계
      setTotalPrime(
        cart
          .filter((f) => f.fruit.isPrime)
          .map((m) => m.quantity * m.fruit.price)
          .reduce((acc, cur) => acc + cur, 0)
      );

      // 일반 과일 금액 합계
      setTotalNormal(
        cart
          .filter((f) => !f.fruit.isPrime)
          .map((m) => m.quantity * m.fruit.price)
          .reduce((acc, cur) => acc + cur, 0)
      );
    } else {
      setSortCart([]);
      setTotalPrime(0);
      setTotalNormal(0);
    }
  }, [cart]);

  return (
    <BaseTemplates>
      <S.Container>
        {sortCart.length > 0 ? (
          <S.Content>
            {sortCart.map((item) => (
              <CardCart key={item?.id} cartItem={item} />
            ))}
          </S.Content>
        ) : (
          <S.EmptyBox>
            <p>장바구니에 등록된 과일이 없습니다.</p>
          </S.EmptyBox>
        )}

        <S.PaymentWrap>
          <S.PaymentFlexBox style={{ margin: '0 0 5px 0' }}>
            <S.PaymentLabel style={{ margin: 'auto 0 auto 30px' }}>
              <PrimeText sx={{ margin: 'auto 6px auto 0' }} />
              과일
            </S.PaymentLabel>
            <S.PaymentText>{comma(totalPrime)}원</S.PaymentText>
          </S.PaymentFlexBox>

          <S.PaymentFlexBox>
            <S.PaymentLabel style={{ margin: 'auto 0 auto 45px' }}>
              일반과일
            </S.PaymentLabel>
            <S.PaymentText>{comma(totalNormal)}원</S.PaymentText>
          </S.PaymentFlexBox>

          <UnderLine sx={{ margin: '14px 0' }} />

          <S.PaymentFlexBox>
            <S.PaymentLabel className="total_label">총 상품금액</S.PaymentLabel>
            <S.PaymentText className="total_price">
              {comma(totalPrime + totalNormal)}원
            </S.PaymentText>
          </S.PaymentFlexBox>

          <S.PaymentButtonBox>
            <Button
              buttonType="Primary"
              sx={{ padding: '9px 15px' }}
              onClick={() => clear()}
            >
              결제하기
            </Button>
          </S.PaymentButtonBox>
        </S.PaymentWrap>
      </S.Container>
    </BaseTemplates>
  );
};

export default CartPage;
