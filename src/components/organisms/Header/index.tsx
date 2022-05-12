import React from 'react';
import * as S from './style';
import { Button } from 'components/atoms';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.HeaderText>크몽이네 과일가게</S.HeaderText>
        <S.ButtonWrap>
          <Button buttonType="Default" sx={{ margin: '0 12px 0 0' }}>
            상품목록
          </Button>
          <Button buttonType="Normal">장바구니</Button>
        </S.ButtonWrap>
      </S.Container>
    </S.Header>
  );
};

export default Header;
