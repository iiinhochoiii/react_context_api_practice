import styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  padding: 12px 0;
  background-color: ${palette('White')};
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${palette('Gray', 2)};
`;

export const Container = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  display: flex;
  position: relative;
`;

export const HeaderText = styled.div`
  font-size: 20px;
  color: ${palette('Black')};
  font-weight: 700;
  margin: auto;

  @media screen and (max-width: 876px) {
    margin: auto auto auto 0;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const ButtonContent = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  ${theme('button.Primary')}
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;

  & > p {
    margin: auto;
    font-size: 14px;
    font-weight: 500;
  }
`;
