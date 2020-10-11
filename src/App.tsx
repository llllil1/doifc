/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { GlobalStyle } from './GlobalStyle';
import './App.css';
import FormTest from './components/FormTest';
import 'doif-react-uikit/dist/datepicker.css';

function App() {
  return (
    <div css={containerStyle}>
      <GlobalStyle />
      <FormTest />
    </div>
  );
}

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
