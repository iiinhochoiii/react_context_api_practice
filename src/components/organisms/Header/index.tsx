import React, { useContext } from 'react';
import * as S from './style';
import { Button } from 'components/atoms';
import useLocations from 'hooks/useLocations';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'contexts';
const Header = () => {
  const { cart } = useContext(AppContext);
  const { path } = useLocations();
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Container>
        <S.HeaderText>과일가게</S.HeaderText>
        <S.ButtonWrap>
          <Button
            buttonType={path === '/' ? 'Default' : 'Normal'}
            sx={{ margin: '0 12px 0 0' }}
            onClick={() => navigate('/')}
          >
            상품목록
          </Button>
          <S.ButtonContent>
            <Button
              buttonType={path === '/cart' ? 'Default' : 'Normal'}
              onClick={() => navigate('/cart')}
            >
              장바구니
            </Button>
            <S.Badge>
              <p>{cart.length}</p>
            </S.Badge>
          </S.ButtonContent>
        </S.ButtonWrap>
      </S.Container>
    </S.Header>
  );
};

export default Header;
