/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Tabs from "./components/Tabs";

const FooterBox = styled.div`
    height: 100px;
    width: 100%;
    bottom: 0px;
    left: 0px;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

function Footer() {
    return (
        <FooterBox>
            <Tabs />
        </FooterBox>
    );
}

export default Footer;
