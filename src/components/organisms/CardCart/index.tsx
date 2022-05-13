import React, { useContext } from 'react';
import * as S from './style';
import { PrimeText, Button, UnderLine } from 'components/atoms';
import { comma } from 'utils/comma';
import { Cart } from 'interfaces/models/cart';
import { AppContext } from 'contexts';

interface Props {
  cartItem?: Cart;
}

const CardCart = (props: Props) => {
  const { cartItem } = props;
  const { remove } = useContext(AppContext);

  return (
    <S.CardCartContainer>
      <S.Content>
        {cartItem?.fruit.isPrime && (
          <S.ContentHeader>
            <PrimeText />
          </S.ContentHeader>
        )}
        <S.Item>
          <S.ImageWrap>{cartItem?.fruit.image}</S.ImageWrap>
          <S.InfoWrap>
            <S.InfoText className="name">{cartItem?.fruit.name}</S.InfoText>
            <S.InfoText className="price">
              {comma(cartItem?.fruit.price || 0)}원
            </S.InfoText>
            <S.InfoFlexBox>
              <S.InfoLabel>수량</S.InfoLabel>
              <S.InfoText>{cartItem?.quantity}</S.InfoText>
            </S.InfoFlexBox>

            <UnderLine />

            <S.InfoFlexBox>
              <S.InfoLabel>상품금액</S.InfoLabel>
              <S.InfoText>
                {cartItem
                  ? comma(cartItem?.quantity * cartItem?.fruit.price)
                  : '0'}
                원
              </S.InfoText>
            </S.InfoFlexBox>
          </S.InfoWrap>
        </S.Item>

        <S.ContentBottom>
          <Button
            buttonType={'Default'}
            onClick={() => {
              if (cartItem?.id) {
                remove(cartItem.id);
              }
            }}
          >
            취소
          </Button>
        </S.ContentBottom>
      </S.Content>
    </S.CardCartContainer>
  );
};

export default CardCart;
