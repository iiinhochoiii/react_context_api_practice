import React from 'react';
import { Fruits } from 'interfaces/models/fruits';
import * as S from './style';
import { PrimeText, Button } from 'components/atoms';

interface Props {
  item: Fruits;
}
const Card = (props: Props) => {
  const { item } = props;
  console.log(item);
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
            <S.InfoText className="price">{item.price}원</S.InfoText>
            <S.InfoFlexBox>
              <S.InfoLabel>잔량</S.InfoLabel>
              <S.InfoText>{item.stock}</S.InfoText>
            </S.InfoFlexBox>
            <S.InfoFlexBox>
              <S.InfoLabel>수량</S.InfoLabel>
              <S.InfoText>0</S.InfoText>
            </S.InfoFlexBox>
          </S.InfoWrap>
        </S.Item>

        <S.ContentBottom>
          <Button buttonType="Default" sx={{ margin: '0 17px 0 0' }}>
            빼기
          </Button>
          <Button buttonType={item.isPrime ? 'Prime' : 'Primary'}>담기</Button>
        </S.ContentBottom>
      </S.Content>
    </S.CardContainer>
  );
};

export default Card;
