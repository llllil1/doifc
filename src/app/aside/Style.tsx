/** @jsx jsx */
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import palette from "../../shared/styles/palette";
import { Visible } from "../../shared/types/Types";

export const AsideBox = styled.div<Visible>`
    transition: all 0.3s;
    background-color: ${palette.gray[9]};
    z-index: 1;
    @media (min-width: 0px) {
        ${(props) =>
            props.visible
                ? css`
                      height: 250px;
                      width: 100%;
                  `
                : css`
                      height: 0px;
                      width: 100%;
                  `}
    }
    @media (min-width: 720px) {
        ${(props) =>
            props.visible
                ? css`
                      width: 250px;
                      height: 100%;
                  `
                : css`
                      width: 0px;
                      height: 100%;
                  `}
    }
`;
export const Logo = styled.div<Visible>`
    transition: all 0.3s;
    width: fit-content;
    cursor: pointer;

    ${(props) =>
        props.visible
            ? css`
                  margin: 30px auto;
                  fill: red;
              `
            : css`
                  margin: 0px auto;
                  transform: rotate(-90deg) scale(0.8);
                  fill: ${palette.gray[9]};
              `};
`;

export const Parent = styled.div<Visible>`
    cursor: pointer;
    overflow: hidden;
    padding-left: 20px;
    ${(props) =>
        props.visible
            ? css`
                  color: ${palette.gray[0]};
              `
            : css`
                  color: ${palette.gray[5]};
              `};
`;

export const Childs = styled.div<Visible>`
    transition: all 0.2s;

    ${(props) =>
        props.visible
            ? css`
                  height: 100px;
              `
            : css`
                  height: 0px;
              `};
`;

export const Child = styled.div`
    overflow: hidden;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 20px;
`;

export const MenuLabel = styled.div`
    color: ${palette.gray[6]};
    margin-bottom: 10px;
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
`;

export const ParentLabel = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
