/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, action, type = 'button' }) {
  const color = '#1677FF';
  const hoverColor = '#4096ff';
  const activeColor = '#0958d9';

  const style = css`
    background-color: ${color};
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    padding: 8px 16px;
    text-align: center;
    margin-bottom: 6px;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      background-color: ${hoverColor};
      box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
    }

    &:focus-visible {
      outline: 4px solid #91caff;
      outline-offset: 1px;
      transition: outline-offset 0s, outline 0s;
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
  type: PropTypes.string,
};

export default Button;
