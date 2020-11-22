/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "doif-react-uikit/dist/datepicker.css";

import { PMenuData } from "./aside/types/Types";
import Aside from "./aside/Aside";
import Footer from "./footer/Fotter";
import Header from "./header/Header";
import Main from "./main/Main";
import { useRecoilState, useRecoilValue } from "recoil";
import { aSideVisible } from "../shared/status/Status";
import styled from "@emotion/styled";
import { Visible } from "../shared/types/Types";
import palette from "../shared/styles/palette";

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

const Container = styled.div<Visible>`
    display: flex;

    height: 100%;
    @media (min-width: 0px) {
        flex-direction: column;
    }
    @media (min-width: 720px) {
        flex-direction: row;
    }
`;

const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

function App() {
    const visible = useRecoilValue(aSideVisible);
    return (
        <Container visible={visible}>
            <Aside datas={sideData} />
            <Content>
                <Header />
                <Main />
                <Footer />
            </Content>
        </Container>
    );
}

export default App;
