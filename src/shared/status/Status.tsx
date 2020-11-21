import { fchmod } from "fs";
import { atom } from "recoil";
/** @jsx jsx */

export const aSideVisible = atom({
    key: "ASIDE_VISIBLE",
    default: true,
});
