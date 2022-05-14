import React from 'react';
import * as S from './style';
import { Button } from 'components/atoms';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.Title>404</S.Title>
        <S.SubTitle>요청하신 페이지를 찾을 수 없습니다.</S.SubTitle>
        <S.SubTitleInfo>
          페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </S.SubTitleInfo>
        <Button
          buttonType="Primary"
          sx={{ padding: '15px 25px', fontSize: '18px' }}
          onClick={() => navigate('/')}
        >
          메인페이지로 이동
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default NotFoundPage;
