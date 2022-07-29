import React, {FC, ReactElement, ChangeEvent} from 'react';
import {observer} from 'mobx-react-lite';
import styled from 'styled-components';
import {RootStoreContext} from '../../App';
import RootStore from '../../stores/root';
import TaskModel from '../../models/task'

export type SequenceProps = {
  className?: string;
};

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  padding: 10px;
  
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

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

export type ItemProps = {
  isFake?: boolean;
  taskData?: TaskModel,
}

const Item: FC<ItemProps> = (props) => {
  const RootStore = React.useContext(RootStoreContext);
  const valueRef = React.useRef('');

  const onBlur = () => {
    const numericValue = Number(valueRef.current);

    if (valueRef.current.length === 0 || !Number.isFinite(numericValue)) {
      return;
    }

    RootStore.tasksStore.addTask({duration: numericValue});
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    valueRef.current = event.target.value;
  }

  return (
    <ItemWrapper isFake={props.isFake}>
      <div>
        <Property>{`Duration: ${props.isFake ? '' : props.taskData.duration}`}</Property>
        <Input onChange={onChange} onBlur={onBlur}/>
      </div>
    </ItemWrapper>
  );
};

function getItems(store: RootStore): ReactElement[] {
  const items: ReactElement[] = []
  const tasks = store.tasksStore.tasks;
  let i = 0;

  for (i; i < tasks.length + 1; i++) {
    if (i === tasks.length) {
      items.push(<Item key={'fake'} isFake={true} />)
      break;
    }

    items.push(<Item key={tasks[i].id} taskData={tasks[i]} />)
  }

  return items;
}

const Sequence: FC<SequenceProps> = (props) => {
  const RootStore = React.useContext(RootStoreContext);

  return (
    <Wrapper className={`${props.className}`}>
      {getItems(RootStore)}
    </Wrapper>
  );
};

export default observer(Sequence);
