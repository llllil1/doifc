/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { Child, Parent } from "../styles/Style";
import { PMenuData, MenuData } from "../types/Types";

function Menu({ datas }: { datas: PMenuData }) {
    const [visible, setVisible] = useState(false);
    const { id, name, menus } = datas;
    return (
        <Parent key={id}>
            <div onClick={() => setVisible(!visible)}>{name}</div>
            {menus.map((menu: MenuData) => (
                <Child visible={visible} key={menu.id}>
                    {menu.name}
                </Child>
            ))}
        </Parent>
    );
}

export default Menu;
