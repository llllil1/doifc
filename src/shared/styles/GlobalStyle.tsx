/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import normalize from "./Normalize";
import palette from "./palette";

export const GlobalStyle = () => (
    <Global
        styles={css`
            ${normalize}
            body {
                background-color: ${palette.gray[1]};
            }
            input {
                color: ${palette.gray[8]};
            }
            html,
            body,
            #root {
                height: 100%;
            }
        `}
    />
);
