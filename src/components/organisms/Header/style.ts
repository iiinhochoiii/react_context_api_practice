import styled from 'styled-components';
import { palette } from 'styled-tools';

export const Header = styled.header`
  display: flex;
  padding: 12px 0;
  background-color: ${palette('White')};
  width: 100%;
  height: 40px;
`;

export const Container = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;
  display: flex;
  position: relative;
`;

export const HeaderText = styled.div`
  font-size: 20px;
  color: ${palette('Black')};
  font-weight: 700;
  margin: auto;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  right: 0;
`;
