import { Icon } from "doif-react-uikit";
import React, { useState } from "react";
import Menu from "./components/Menu";
import { Logo, SideBox } from "./styles/Style";
import { PMenuData } from "./types/Types";

function Side({ datas }: { datas: PMenuData[] }) {
  const [visible, setVisible] = useState(true);

  return (
    <SideBox visible={visible}>
      <Logo visible={visible} onClick={() => setVisible(!visible)}>
        <Icon icon="heart" size="4rem" />
      </Logo>
      {visible && datas.map((data) => <Menu datas={data} />)}
    </SideBox>
  );
}

export default Side;
