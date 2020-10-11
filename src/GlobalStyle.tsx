/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import palette from './styles/palette';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        body {
          background-color: ${palette.gray[1]};
        }

        outline: none;
        border: none;
        box-sizing: border-box;

        input {
          color: ${palette.gray[8]};
        }

        /* input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          -webkit-text-fill-color: ${palette.gray[8]};
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
          box-shadow: 0 0 0px 1000px #fff inset;
          transition: background-color 5000s ease-in-out 0s;
        } */
      }
    `}
  />
);
