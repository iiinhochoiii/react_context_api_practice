import React from 'react';
import * as S from './style';
import { Header } from 'components/organisms';

interface Props {
  children?: React.ReactNode;
}

const BaseTemplates = (props: Props) => {
  const { children } = props;
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};

export default BaseTemplates;
