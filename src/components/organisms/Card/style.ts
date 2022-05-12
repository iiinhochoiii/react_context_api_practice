import styled from 'styled-components';
import { palette } from 'styled-tools';

export const CardContainer = styled.article`
  width: 27.5%;
  background-color: ${palette('White')};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  padding: 12px 17px 16px 16px;
  margin: 0 25px;
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: 55%;
`;

export const Item = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`;

export const ContentHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImageWrap = styled.div`
  font-size: 100px;
  font-weight: 700;
  margin: auto 41px auto 25px;
`;

export const InfoWrap = styled.div``;

interface InfoTitleProps {
  size?: string;
}

export const InfoText = styled.div<InfoTitleProps>`
  font-size: 16px;
  font-weight: 700;
  color: ${palette('Black')};

  &.name {
    font-size: 20px;
    margin: 22px 0 0 0;
  }
  &.price {
    margin: 19px 0 13px 0;
  }
`;

export const InfoLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${palette('Dark_Gray')};
  margin: 0 8px 0 0;
`;

export const InfoFlexBox = styled.div`
  display: flex;
`;

export const ContentBottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
