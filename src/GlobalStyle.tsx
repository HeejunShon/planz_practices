/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
        text-decoration: none;
      }

      html,
      body,
      #root {
        width: 100%;
        height: 100%;
      }

      p {
        margin: 0;
        padding: 0;
      }

      [onClick] {
        cursor: pointer;
      }

      a {
        color: inherit;
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
      }

      input {
        box-shadow: none;
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        outline: none;
      }

      button {
        border: 0;
        outline: 0;
        background-color: inherit;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
