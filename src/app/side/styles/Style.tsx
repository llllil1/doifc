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
          width: 250px;
          background-color: ${palette.black[5]};
        `
      : css`
          top: 0px;
          height: 65px;
          width: 55px;
          border-radius: 0px 15px 15px 0px;
        `}
`;

export const Logo = styled.div<Visible>`
  transition: transform 0.2s, fill 0.2s;
  text-align: center;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.visible
      ? css`
          font-size: 75px;
          fill: red;
        `
      : css`
          font-size: 50px;
          transform: rotate(-90deg);
        `}
`;
export const Parent = styled.div`
  text-align: center;
  cursor: pointer;
  &:last-child {
  }
  padding: 10px;
`;

export const Child = styled.div<Visible>`
  transition: all 0.2s;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.visible
      ? css`
          height: 50px;
          padding: 5px;
        `
      : css`
          height: 0px;
        `};
  &:last-child {
    border-bottom: 0px;
  }
`;
