/** @jsx jsx */
import { jsx } from "@emotion/core";

export type MenuData = {
    id: number;
    name: string;
};
export type PMenuData = {
    id: number;
    name: string;
    menus: MenuData[];
};
