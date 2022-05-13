import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from 'contexts';
import BaseTemplates from 'components/templates/Base';
import * as S from './style';
import { Button, PrimeText, LoadingText } from 'components/atoms';
import { Card } from 'components/organisms';
import useApi from 'hooks/useApi';
import useLocations from 'hooks/useLocations';
import { Fruits } from 'interfaces/models/fruits';
import { Link, useNavigate } from 'react-router-dom';
import { groupBy } from 'utils/groupby';

const HomePage = () => {
  const { cart } = useContext(AppContext);

  const navigate = useNavigate();
  const { data, loading, getList } = useApi<Fruits>('fruits');
  const [fruits, setFruits] = useState<Fruits[]>([]);
  const { location } = useLocations();

  useEffect(() => {
    if (data.length > 0) {
      if (location?.tab === 'all' || location?.tab === undefined) {
        const sortObj = groupBy<Fruits>(data, 'isPrime');

        setFruits([...sortObj['true'], ...sortObj['false']]);
      } else {
        setFruits(
          data.filter((item) =>
            location?.tab === 'normal' ? !item.isPrime : item.isPrime
          )
        );
      }
    }
  }, [data]);

  useEffect(() => {
    getList();
  }, [location]);

  return (
    <BaseTemplates>
      <S.Container>
        <S.FilterWrap>
          <Button
            buttonType={
              location?.tab === 'all' || location?.tab === undefined
                ? 'Primary'
                : 'Normal'
            }
            onClick={() => navigate('/?tab=all')}
          >
            전체
          </Button>
          <Button
            buttonType={location?.tab === 'normal' ? 'Primary' : 'Normal'}
            sx={{ margin: '0 16px 0 19px' }}
            onClick={() => navigate('/?tab=normal')}
          >
            <Link to="/?tab=nomal">일반 과일</Link>
            {/* 일반 과일 */}
          </Button>
          <Button
            buttonType={location?.tab === 'prime' ? 'Primary' : 'Normal'}
            onClick={() => navigate('/?tab=prime')}
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
            {fruits.map((item) => {
              const cartItem = cart?.find((c) => c.fruits.id === item.id);
              return <Card key={item.id} item={item} cartItem={cartItem} />;
            })}
          </S.Content>
        )}
      </S.Container>
    </BaseTemplates>
  );
};

export default HomePage;
