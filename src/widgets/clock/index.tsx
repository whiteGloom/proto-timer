import React, {FC} from 'react';
import styled from 'styled-components';

export type ClockProps = {
  className?: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: #fff;
  border-radius: 50px;
  box-sizing: border-box;
`;

const Timer = styled.p`
  font-size: 10rem;
  color: #3e3e3e;
`;

const Clock: FC<ClockProps> = (props) => {
  return (
    <Wrapper className={`${props.className}`}>
      <Timer>
        23:21
      </Timer>
    </Wrapper>
  );
}

export default Clock;
