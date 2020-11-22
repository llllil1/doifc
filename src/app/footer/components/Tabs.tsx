/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import palette from "../../../shared/styles/palette";

const TabBox = styled.div`
    margin: 0px 10px;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Tab = styled.div`
    width: 75px;
    height: 75px;
    background-color: ${palette.black[6]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    color: ${palette.white[0]};
    font-weight: bold;
    font-size: 12px;
    border: 3px solid ${palette.white[8]}; ;
`;

const Tab2 = styled.div`
    width: 75px;
    height: 75px;
    background-color: ${palette.black[6]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    color: ${palette.gray[5]};
    font-weight: bold;
    font-size: 12px;
    border: 3px solid ${palette.gray[8]}; ;
`;

function Tabs() {
    return (
        <TabBox>
            <Tab>소메뉴 1</Tab>
            <Tab2>소메뉴 2</Tab2>
            <Tab2>소메뉴 3</Tab2>
            <Tab2>...</Tab2>
        </TabBox>
    );
}

export default Tabs;
