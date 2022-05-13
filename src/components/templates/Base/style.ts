import styled from 'styled-components';
import { palette } from 'styled-tools';

export const Container = styled.div`
  max-width: 100%;
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  background-color: ${palette('Gray', 2)};
  padding: 64px 0 0 0;
`;
