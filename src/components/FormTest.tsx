/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
  Button,
  Input,
  Select,
  useChange,
  useChangeCheck,
  useChangeDate,
  ButtonGroup,
  Check,
  DatePicker,
  Radio,
  DoifUtil,
  Dialog,
  Tab,
} from 'doif-react-uikit';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

interface FormTestProps {}

function FormTest() {
  const data = [
    {
      code: 'CODE_01',
      name: 'code01',
    },
    {
      code: 'CODE_02',
      name: 'code02',
    },
    {
      code: 'CODE_03',
      name: 'code03',
    },
  ];

  const defVal = {
    code: '',
    name: '선택없음',
  };

  const [visible, setVisible] = useState(false);

  const onVisibleChange = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  const tabs = [
    {
      id: 'TAB1',
      name: 'TAB 01',
      content: (
        <div>
          <Input variant="outline" label="Name" />
          <br />
          <ButtonGroup>
            <Button>Button</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      id: 'TAB2',
      name: 'TAB 02',
      content: (
        <div>
          <Input variant="underline" label="Name" />
          <br />
          <ButtonGroup>
            <Button>Button</Button>
            <Button variant="text">Button</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      id: 'TAB3',
      name: 'TAB 03',
      content: <div>TAB 03</div>,
    },
  ];

  const [selected, setSelected] = useState('TAB1');

  const onChangeTab = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  const [inputForm, onChange, resetInput] = useChange({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    selectValue1: '',
    selectValue2: '',
    radioValue1: '',
    radioValue2: '',
  });

  const [dateForm, onChangeDate, resetDate] = useChangeDate({
    startDate: null,
    endDate: null,
  });

  const [checkForm, onChangeCheck, resetCheck] = useChangeCheck({
    checkValue1: [],
    checkValue2: [],
  });

  const {
    inputValue1,
    inputValue2,
    inputValue3,
    selectValue1,
    selectValue2,
    radioValue1,
    radioValue2,
  } = inputForm;

  const { startDate, endDate } = dateForm;
  const { checkValue1, checkValue2 } = checkForm;

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const transDateForm = DoifUtil.mapDateString(dateForm);

      console.log({ ...inputForm, ...transDateForm, ...checkForm });
    },
    [inputForm, dateForm, checkForm]
  );

  const onReset = useCallback(() => {
    resetInput();
    resetDate();
    resetCheck();
  }, [resetInput, resetDate, resetCheck]);

  return (
    <div>
      <div css={formTestStyle}>
        <form onSubmit={onSubmit}>
          <Select
            data={data}
            value={selectValue1}
            defVal={defVal}
            name="selectValue1"
            variant="underline"
            label="select1"
            onChange={onChange}
          />
          <br />
          <Select
            data={data}
            value={selectValue2}
            defVal={defVal}
            name="selectValue2"
            variant="outline"
            label="select2"
            onChange={onChange}
          />
          <br />
          <Input
            value={inputValue1}
            name="inputValue1"
            variant="outline"
            label="input1"
            onChange={onChange}
          />
          <br />
          <Input
            value={inputValue2}
            name="inputValue2"
            variant="outline"
            label="input2"
            onChange={onChange}
          />
          <br />
          <Input
            value={inputValue3}
            name="inputValue3"
            variant="underline"
            label="input3"
            onChange={onChange}
          />
          <br />
          <DatePicker
            selected={startDate}
            onChange={onChangeDate}
            name="startDate"
          />
          <br />
          <DatePicker
            selected={endDate}
            onChange={onChangeDate}
            name="endDate"
            showTimeSelect
          />
          <br />
          <Check
            data={data}
            value={checkValue1}
            name="checkValue1"
            onChange={onChangeCheck}
          />
          <br />
          <Check
            data={data}
            value={checkValue2}
            name="checkValue2"
            onChange={onChangeCheck}
          />
          <br />
          <Radio
            data={data}
            value={radioValue1}
            name="radioValue1"
            onChange={onChange}
          />
          <br />
          <Radio
            data={data}
            value={radioValue2}
            name="radioValue2"
            defVal={{ code: '', name: '선택없음' }}
            onChange={onChange}
          />
          <br />
          <ButtonGroup>
            <Button>버튼</Button>
            <Button variant="text" onClick={onReset} type="reset">
              초기화
            </Button>
            <Button variant="outline" type="reset" onClick={onVisibleChange}>
              Dialog
            </Button>
          </ButtonGroup>
        </form>

        <Dialog
          visible={visible}
          cancellable
          onCancel={onVisibleChange}
          onConfirm={onVisibleChange}
          title="개인정보 등록">
          <Input variant="outline" label="Name" />
          <br />
          <Input variant="outline" label="Age" />
          <br />
          <Input variant="outline" label="Phone" />
          <br />
          <Input variant="outline" label="Email" />
          <br />
        </Dialog>
      </div>
      <div>
        <Tab
          tabs={tabs}
          selected={selected}
          name="tab"
          onChange={onChangeTab}
        />
      </div>
    </div>
  );
}

const formTestStyle = css`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default FormTest;
