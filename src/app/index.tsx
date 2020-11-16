/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { GlobalStyle } from "../shared/styles/GlobalStyle";
import FormTest from "../shared/components/FormTest";
import "doif-react-uikit/dist/datepicker.css";
import Top from "./top";
import Middle from "./middle";
import Side from "./side";
import Bottom from "./bottom";

function App() {
  return (
    <div css={containerStyle}>
      <GlobalStyle />
      <Top />
      <Side />
      <Middle />
      <Bottom />
    </div>
  );
}

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
