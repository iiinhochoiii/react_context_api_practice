import React, { HTMLAttributes } from 'react';
import * as S from './style';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  sx?: React.CSSProperties;
}

const Underline = (props: Props) => {
  const { sx } = props;
  return <S.Container {...props} style={sx} />;
};

export default Underline;
