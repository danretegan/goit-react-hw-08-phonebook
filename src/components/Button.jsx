/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, action, type = 'button' }) {
  const color = '#ff6b0a';
  const hoverColor = '#b34d0b';
  const activeColor = 'blue';

  const style = css`
    background-color: ${color};
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.25px;
    line-height: 24px;
    outline: none;
    padding: 8px 16px;
    text-align: center;
    text-transform: uppercase;

    &:hover,
    &:focus {
      background-color: ${hoverColor};
    }
    &:active {
      background-color: ${activeColor};
    }
  `;

  return (
    <button css={style} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
  button: PropTypes.string,
};

export default Button;
