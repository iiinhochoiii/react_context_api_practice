import styled from 'styled-components';
import { palette } from 'styled-tools';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${palette('Gray', 2)};
  display: flex;
`;

export const Content = styled.div`
  margin: auto;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 88px;
  font-weight: 900;
  color: ${palette('Dark_Gray')};
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 20px 0 0 0;
`;

export const SubTitleInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0;
`;
