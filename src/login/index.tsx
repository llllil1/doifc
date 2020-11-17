/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Column, Field, Form, Icon, Input, Label, Row } from "doif-react-uikit";

import { GlobalStyle } from "../shared/styles/GlobalStyle";
import palette from "../shared/styles/palette";

const LoginBox = styled.div`
    background-color: ${palette.white[0]};
    width: 500px;
    height: 700px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const Content = styled.div`
    height: 100%;
`;
const Header = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65%;
    background-color: ${palette.black[0]};
`;

const FromStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
    margin: 0px 70px;
`;

const InputStyle = css``;
function Login() {
    return (
        <LoginBox>
            <Header>
                <Icon icon="heart" size="100px" color="red" />
            </Header>
            <Form css={FromStyle}>
                <Input name="inputValue1" variant="outline" label="Username" css={InputStyle} />
                <Input name="inputValue1" variant="outline" label="password" css={InputStyle} />
            </Form>
        </LoginBox>
    );
}

export default Login;
