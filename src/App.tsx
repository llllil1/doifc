import React, { useState } from 'react';
import { Button, Icon, ButtonGroup, Dialog } from 'doif-react-uikit';
import { GlobalStyle } from './GlobalStyle';

function App() {
  const [visible, setVisible] = useState(false);
  const onCancel = () => {
    setVisible(false);
  };

  const onDialogVisible = () => {
    setVisible(true);
  };

  return (
    <div>
      <GlobalStyle />
      <ButtonGroup>
        <Button onClick={onDialogVisible}>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button disabled>
          <Icon icon="exit" /> LIKE
        </Button>
        <Button theme="secondary">
          <Icon icon="pencil" /> LIKE
        </Button>
        <Button disabled theme="secondary">
          <Icon icon="exit" /> LIKE
        </Button>
        <Button>svg가 왜 깨질까요?</Button>
      </ButtonGroup>
      <Icon icon="heart" color="red" />
      <Icon icon="exit" />
      <Icon icon="pencil" />
      <Dialog
        visible={visible}
        title="취소 버튼을 클릭해 보세요"
        cancellable
        onCancel={onCancel}
      />
    </div>
  );
}

export default App;
