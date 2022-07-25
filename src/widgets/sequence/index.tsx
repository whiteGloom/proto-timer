import React, {FC} from 'react';
import styled from 'styled-components';

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
}

const Item: FC<ItemProps> = (props) => {
  return (
    <ItemWrapper isFake={props.isFake}>
      <div>
        <Property>Duration:</Property>
        <Input/>
      </div>
    </ItemWrapper>
  );
};

const Sequence: FC<SequenceProps> = (props) => {
  return (
    <Wrapper className={`${props.className}`}>
      <Item />
      <Item />
      <Item />
      <Item isFake={true}/>
    </Wrapper>
  );
};

export default Sequence;
