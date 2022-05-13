import styled from 'styled-components';
import { palette } from 'styled-tools';
import { Props } from './index';

export const Container = styled.div<Props>`
  border-bottom: 1px solid ${palette('Gray', 1)};
`;
