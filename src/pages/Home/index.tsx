import React, { useState } from 'react';
import BaseTemplates from 'components/templates/Base';
import * as S from './style';
import { Button, PrimeText } from 'components/atoms';
import { Card } from 'components/organisms';
import { Fruits } from 'interfaces/models/fruits';

const HomePage = () => {
  const [mock] = useState<Fruits[]>([
    {
      id: 0,
      name: '바나나',
      image: '🍌',
      price: 2000,
      isPrime: true,
      stock: 10,
    },
    {
      id: 1,
      name: '멜론',
      image: '🍈',
      price: 20000,
      isPrime: false,
      stock: 10,
    },
    {
      id: 2,
      name: '멜론',
      image: '🍈',
      price: 30000,
      isPrime: true,
      stock: 10,
    },
  ]);

  return (
    <BaseTemplates>
      <S.Container>
        <S.MenuWrap>
          <Button buttonType="Primary">전체</Button>
          <Button sx={{ margin: '0 16px 0 19px' }}>일반 과일</Button>
          <Button>
            <S.ButtonContent>
              <PrimeText sx={{ margin: '0 6px 0 0' }} />
              과일
            </S.ButtonContent>
          </Button>
        </S.MenuWrap>
        <S.Content>
          {mock.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </S.Content>
      </S.Container>
    </BaseTemplates>
  );
};

export default HomePage;
