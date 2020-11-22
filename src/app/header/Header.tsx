/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Icon } from "doif-react-uikit";
import palette from "../../shared/styles/palette";
const HeaderBox = styled.div`
    height: 64px;
    background-color: ${palette.white[5]};
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const UserInfo = styled.div`
    flex-shrink: 0;
    margin-right: 10px;
`;

const Setting = styled.div`
    flex-basis: 50px;
`;

function Header() {
    return (
        <HeaderBox>
            <UserInfo>임진성</UserInfo>
            <Setting>
                <Icon icon="pencil"></Icon>
            </Setting>
        </HeaderBox>
    );
}

export default Header;
