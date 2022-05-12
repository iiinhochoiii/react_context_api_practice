import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import { Props } from './index';

const buttonStyles = css<Props>`
  ${(props) => {
    return theme(`button.${props.buttonType || 'Default'}`);
  }}
`;
export const Container = styled.button<Props>`
  ${buttonStyles};
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`;
