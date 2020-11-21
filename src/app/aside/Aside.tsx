import { Icon } from "doif-react-uikit";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { AsideBox, Logo, MenuLabel } from "./Style";
import { PMenuData } from "./types/Types";
import { aSideVisible } from "../../shared/status/Status";
import Menu from "./components/Menu";

function Aside({ datas }: { datas: PMenuData[] }) {
    const [visible, setVisible] = useRecoilState(aSideVisible);

    return (
        <AsideBox visible={visible}>
            <Logo visible={visible} onClick={() => setVisible(!visible)}>
                <Icon icon="heart" size="4rem" />
            </Logo>
            {visible && <MenuLabel>MENU</MenuLabel>}
            {visible && datas.map((data) => <Menu key={data.id} datas={data} />)}
        </AsideBox>
    );
}

export default Aside;
