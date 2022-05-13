import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh - 114px);
  width: calc(100% - 94px);
  margin: 0 auto 50px auto;
  position: relative;
`;

export const FilterWrap = styled.section`
  margin: 32px 0 0 0;
  display: flex;
`;

export const ButtonContent = styled.div`
  display: flex;
`;

export const Content = styled.section`
  margin: 48px -25px 0 -25px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1460px) {
    margin: 48px -20px 0 -20px;
  }

  @media screen and (max-width: 1320px) {
    margin: 48px -15px 0 -15px;
  }

  @media screen and (max-width: 1146px) {
    margin: 48px 0 0 0;
    justify-content: space-between;
  }
`;
