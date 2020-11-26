/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Page from "./components/Page";
const MainBox = styled.div`
    flex-grow: 1;
    padding: 20px;
`;

function Main() {
    return (
        <MainBox>
            <Page></Page>
        </MainBox>
    );
}

export default Main;
