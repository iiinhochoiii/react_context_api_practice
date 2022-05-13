import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import { Props } from './index';

const buttonStyles = css<Props>`
  ${(props) => {
    if (props.disabled) {
      return theme(`button.${'Disabled'}`);
    } else {
      return theme(`button.${props.buttonType || 'Default'}`);
    }
  }}
`;
export const Container = styled.button<Props>`
  ${buttonStyles};
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;

  ${(props) => {
    if (!props.disabled) {
      return css`
        &:hover {
          opacity: 0.7;
        }
      `;
    }
  }}
`;
