/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Icon } from "doif-react-uikit";
import { useState } from "react";
import { Child, Childs, Parent, ParentLabel } from "../Style";
import { PMenuData, MenuData } from "../types/Types";

function Menu({ datas }: { datas: PMenuData }) {
    const [visible, setVisible] = useState(false);
    const { id, name, menus } = datas;
    return (
        <Parent visible={visible} key={id}>
            <ParentLabel onClick={() => setVisible(!visible)}>
                <Icon icon="heart" css={{ margin: "0px 10px" }} />
                {name}
            </ParentLabel>
            <Childs visible={visible}>
                {menus.map((menu: MenuData) => (
                    <Child key={menu.id}>
                        <Icon icon="heart" size="15px" css={{ margin: "0px 10px" }} />
                        {menu.name}
                    </Child>
                ))}
            </Childs>
        </Parent>
    );
}

export default Menu;
