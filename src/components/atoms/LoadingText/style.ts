import styled from 'styled-components';
import { palette } from 'styled-tools';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`;

export const Text = styled.p`
  margin: auto;
  font-size: 22px;
  font-weight: 900;
  color: ${palette('Dark_Gray')};
`;
