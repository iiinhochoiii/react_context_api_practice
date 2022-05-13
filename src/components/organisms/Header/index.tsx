import React from 'react';
import * as S from './style';
import { Button } from 'components/atoms';
import useLocations from 'hooks/useLocations';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { path } = useLocations();
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Container>
        <S.HeaderText>크몽이네 과일가게</S.HeaderText>
        <S.ButtonWrap>
          <Button
            buttonType={path === '/' ? 'Default' : 'Normal'}
            sx={{ margin: '0 12px 0 0' }}
            onClick={() => navigate('/')}
          >
            상품목록
          </Button>
          <Button
            buttonType={path === '/cart' ? 'Default' : 'Normal'}
            onClick={() => navigate('/cart')}
          >
            장바구니
          </Button>
        </S.ButtonWrap>
      </S.Container>
    </S.Header>
  );
};

export default Header;
