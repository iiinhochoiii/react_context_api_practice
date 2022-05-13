import styled from 'styled-components';
import { palette } from 'styled-tools';

export const Container = styled.main`
  min-height: calc(100vh - 114px);
  width: 75%;
  margin: 0 auto 50px auto;
  position: relative;

  @media screen and (max-width: 1146px) {
    width: 85%;
  }

  @media screen and (max-width: 988px) {
    width: 92%;
  }

  @media screen and (max-width: 876px) {
    width: 75%;
  }

  @media screen and (max-width: 558px) {
    width: 85%;
  }
`;

export const Content = styled.section`
  margin: 48px 0 0 0;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

export const PaymentWrap = styled.section`
  margin: 0 0 0 auto;
  width: 300px;
`;

export const PaymentFlexBox = styled.div`
  display: flex;
`;

export const PaymentLabel = styled.label`
  display: flex;
  color: ${palette('Black')};
  font-weight: 700;
  font-size: 16px;

  &.total_label {
    font-size: 22px;
    margin: auto 0 auto 10px;
  }
`;

export const PaymentText = styled.p`
  margin: 0 0 0 auto;
  font-size: 20px;
  font-weight: 700;

  &.total_price {
    font-size: 32px;
    color: ${palette('Blue')};
  }
`;

export const PaymentButtonBox = styled.div`
  margin: 32px 0 0 0;
  display: flex;
  justify-content: flex-end;
`;

export const EmptyBox = styled.div`
  display: flex;
  height: 300px;
  & > p {
    margin: auto;
    font-size: 24px;
    font-weight: 900;
    color: ${palette('Dark_Gray')};
  }
`;
