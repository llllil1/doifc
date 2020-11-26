/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import palette from "../../../shared/styles/palette";

const PageBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${palette.cyan[2]};
`;

function Page() {
    return <PageBox></PageBox>;
}

export default Page;
