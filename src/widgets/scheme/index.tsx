import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import styled from 'styled-components';
import {RootStoreContext} from '../../App';
import RootStore from '../../stores/root';
import SchemeNode from '../scheme-node';

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

function getItems(store: RootStore): ReturnType<typeof SchemeNode>[] {
  const items: ReturnType<typeof SchemeNode>[] = [];
  const tasks = store.tasksStore.tasks;
  let i = 0;

  for (i; i < tasks.length + 1; i++) {
    if (i === tasks.length) {
      items.push(<SchemeNode key={'fake'} isFake={true} />)
      break;
    }

    items.push(<SchemeNode key={tasks[i].id} taskData={tasks[i]} />)
  }

  return items;
}

const Scheme: FC<SequenceProps> = (props) => {
  const RootStore = React.useContext(RootStoreContext);

  return (
    <Wrapper className={`${props.className}`}>
      {getItems(RootStore)}
    </Wrapper>
  );
};

export default observer(Scheme);
