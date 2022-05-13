import React, { useState, useEffect } from 'react';
import BaseTemplates from 'components/templates/Base';
import * as S from './style';
import { Button, PrimeText, LoadingText } from 'components/atoms';
import { Card } from 'components/organisms';
import useApi from 'hooks/useApi';
import { Fruits } from 'interfaces/models/fruits';
import { Link } from 'react-router-dom';
import { groupBy } from 'utils/groupby';

const HomePage = () => {
  const { data, loading } = useApi<Fruits>('fruits');
  const [fruits, setFruits] = useState<Fruits[]>([]);
  const [tab, setTab] = useState('all');

  useEffect(() => {
    if (data.length > 0) {
      if (tab === 'all') {
        const sortObj = groupBy<Fruits>(data, 'isPrime');

        setFruits([...sortObj['true'], ...sortObj['false']]);
      } else {
        setFruits(
          data.filter((item) =>
            tab === 'normal' ? !item.isPrime : item.isPrime
          )
        );
      }
    }
  }, [tab, data]);

  const onClickHandler = (tab: string) => {
    setTab(tab);
  };

  return (
    <BaseTemplates>
      <S.Container>
        <S.FilterWrap>
          <Button
            buttonType={tab === 'all' ? 'Primary' : 'Normal'}
            onClick={() => onClickHandler('all')}
          >
            <Link to="/">전체</Link>
          </Button>
          <Button
            buttonType={tab === 'normal' ? 'Primary' : 'Normal'}
            sx={{ margin: '0 16px 0 19px' }}
            onClick={() => onClickHandler('normal')}
          >
            <Link to="/?tab=nomal">일반 과일</Link>
            {/* 일반 과일 */}
          </Button>
          <Button
            buttonType={tab === 'prime' ? 'Primary' : 'Normal'}
            onClick={() => onClickHandler('prime')}
          >
            <Link to="/?tab=prime">
              <S.ButtonContent>
                <PrimeText sx={{ margin: '0 6px 0 0' }} />
                과일
              </S.ButtonContent>
            </Link>
          </Button>
        </S.FilterWrap>
        {loading ? (
          <LoadingText />
        ) : (
          <S.Content>
            {fruits.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </S.Content>
        )}
      </S.Container>
    </BaseTemplates>
  );
};

export default HomePage;
