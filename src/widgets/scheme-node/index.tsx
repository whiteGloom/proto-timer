import React, {FC, ChangeEvent} from 'react';
import {observer} from 'mobx-react-lite';
import styled from 'styled-components';
import {RootStoreContext} from '../../App';
import TaskModel from '../../models/task';

export type SchemeNodeProps = {
  isFake?: boolean;
  taskData?: TaskModel,
};

const ItemWrapper = styled.div<{isFake?: boolean}>`
  width: 100%;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
  transition: .3s opacity;
  ${props => props.isFake ? 'opacity: 0.5;' : ''}
  
  &:hover {
    opacity: 1;
  }

  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const Property = styled.em`
  font-style: normal;
  color: #3e3e3e;
`;

const Input = styled.input`
  display: inline-block;
  outline: none;
  color: #3e3e3e;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #3e3e3e;
  margin-left: 10px;
  font-family: sans-serif;
`;

const SchemeNode: FC<SchemeNodeProps> = (props) => {
  const RootStore = React.useContext(RootStoreContext);
  const valueRef = React.useRef('');

  const onBlur = () => {
    const numericValue = Number(valueRef.current);

    if (valueRef.current.length === 0 || !Number.isFinite(numericValue)) {
      return;
    }

    RootStore.tasksStore.addTask({duration: numericValue});
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    valueRef.current = event.target.value;
  };

  return (
    <ItemWrapper isFake={props.isFake}>
      <Property>{`Duration: ${props.isFake ? '' : props.taskData.duration}`}</Property>
      <Input onChange={onChange} onBlur={onBlur}/>
    </ItemWrapper>
  );
};

export default observer(SchemeNode);
