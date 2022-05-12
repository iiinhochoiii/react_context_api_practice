import React, { HTMLAttributes } from 'react';
import * as S from './style';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  size?: string;
  sx?: React.CSSProperties;
}

const PrimeText = (props: Props) => {
  const { sx } = props;
  return (
    <S.Contaier {...props} style={sx}>
      Prime
    </S.Contaier>
  );
};

export default PrimeText;
