import React, { useContext } from 'react';
import { Fruits } from 'interfaces/models/fruits';
import * as S from './style';
import { PrimeText, Button } from 'components/atoms';
import { comma } from 'utils/comma';
import { Cart } from 'interfaces/models/cart';
import { AppContext } from 'contexts';

interface Props {
  item: Fruits;
  cartItem?: Cart;
}

const Card = (props: Props) => {
  const { item, cartItem } = props;
  const { increase, decrease } = useContext(AppContext);

  return (
    <S.CardContainer>
      <S.Content>
        {item.isPrime && (
          <S.ContentHeader>
            <PrimeText />
          </S.ContentHeader>
        )}
        <S.Item>
          <S.ImageWrap>{item.image}</S.ImageWrap>
          <S.InfoWrap>
            <S.InfoText className="name">{item.name}</S.InfoText>
            <S.InfoText className="price">{comma(item.price)}원</S.InfoText>
            <S.InfoFlexBox>
              <S.InfoLabel>잔량</S.InfoLabel>
              <S.InfoText>{item.stock - (cartItem?.quantity || 0)}</S.InfoText>
            </S.InfoFlexBox>
            {cartItem && cartItem.quantity > 0 && (
              <S.InfoFlexBox>
                <S.InfoLabel>수량</S.InfoLabel>
                <S.InfoText>{cartItem?.quantity}</S.InfoText>
              </S.InfoFlexBox>
            )}
          </S.InfoWrap>
        </S.Item>

        <S.ContentBottom>
          {cartItem && cartItem.quantity > 0 && (
            <Button
              buttonType="Default"
              sx={{ margin: '0 17px 0 0' }}
              onClick={() => decrease(item)}
            >
              빼기
            </Button>
          )}
          <Button
            buttonType={item.isPrime ? 'Prime' : 'Primary'}
            onClick={() => {
              if (item.stock > 0) {
                increase(item);
              }
            }}
            disabled={item.stock === cartItem?.quantity}
          >
            담기
          </Button>
        </S.ContentBottom>
      </S.Content>
    </S.CardContainer>
  );
};

export default Card;
