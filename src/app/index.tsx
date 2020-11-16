/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { GlobalStyle } from "../shared/styles/GlobalStyle";
import "doif-react-uikit/dist/datepicker.css";
import Top from "./top";
import Middle from "./middle";
import Bottom from "./bottom";
import Side from "./side";
import { PMenuData } from "./side/types/Types";

const sideData: PMenuData[] = [
    {
        id: 0,
        name: "첫째",
        menus: [
            { id: 0, name: "소1" },
            { id: 1, name: "소2" },
            { id: 2, name: "소3" },
            { id: 3, name: "소4" },
        ],
    },
    {
        id: 1,
        name: "둘째",
        menus: [
            { id: 0, name: "소1" },
            { id: 1, name: "소2" },
            { id: 2, name: "소3" },
            { id: 3, name: "소4" },
        ],
    },
];
function App() {
    return (
        <div css={containerStyle}>
            <GlobalStyle />
            <Top />
            <Side datas={sideData} />
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
