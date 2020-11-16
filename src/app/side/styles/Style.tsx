/** @jsx jsx */
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Visible } from "../../../shared/types/Types";
import palette from "../../../shared/styles/palette";

export const SideBox = styled.div<Visible>`
    left: 0px;
    position: absolute;
    transition: all 0.2s;
    ${(props) =>
        props.visible
            ? css`
                  top: 0px;
                  height: 100%;
                  width: 150px;
                  margin: 15px;
                  background-color: ${palette.violet[5]};
              `
            : css`
                  top: 20px;
                  height: 65px;
                  width: 55px;
                  background-color: ${palette.cyan[5]};
                  border-radius: 0px 15px 15px 0px;
              `}
`;

export const Logo = styled.div<Visible>`
    transition: transform 0.2s, color 0.2s;
    text-align: center;
    cursor: pointer;
    user-select: none;
    ${(props) =>
        props.visible
            ? css`
                  font-size: 75px;
                  color: #e27e7e;
                  &:hover {
                      color: #teal;
                  }
              `
            : css`
                  font-size: 50px;
                  color: #f2f2f0;
                  transform: rotate(270deg);
                  &:hover {
                      color: #64a1a5;
                  }
              `}
`;
export const Parent = styled.div`
    background-color: #e27e7e;
    color: #f2f2f0;
    text-align: center;
    border-top: 1px solid #f2f2f0;
    cursor: pointer;
    &:last-child {
        border-bottom: 1px solid #f2f2f0;
    }
    padding: 10px;
`;

export const Child = styled.div<Visible>`
    transition: all 0.2s;
    overflow: hidden;
    background-color: #f7ae7e;
    cursor: pointer;

    ${(props) =>
        props.visible
            ? css`
                  height: 20px;
                  padding: 5px;
                  border-bottom: 3px solid #e27e7e;
              `
            : css`
                  height: 0px;
              `};
    &:last-child {
        border-bottom: 0px;
    }
`;
