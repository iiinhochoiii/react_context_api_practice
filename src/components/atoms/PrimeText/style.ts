import styled from 'styled-components';
import { palette } from 'styled-tools';
import { Props } from './index';

export const Contaier = styled.p<Props>`
  font-size: ${(props) => props.size || '14px'};
  margin: 0;
  font-style: italic;
  font-size: 14px;
  font-weight: 700;
  color: ${palette('Orange')};
`;
