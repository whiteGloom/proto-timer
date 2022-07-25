import React, {FC} from 'react';
import styled from 'styled-components';

export type OnClickCallback = () => void;

export type CheckboxButtonProps = {
  title: string;
  isChecked: boolean;
  onClick: OnClickCallback;
  className?: string;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  flex-shrink: 0;
  color: #3e3e3e;
  font-weight: bold;
  background: white;
  font-size: 1.5rem;
`;

const Indicator = styled.div<{isChecked: boolean}>`
  width: 10px;
  height: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  border: ${props => props.isChecked ? '5px' : '2px'} solid #3e3e3e;
  margin-right: 5px;
`

const CheckboxButton: FC<CheckboxButtonProps> = (props) => {
  return(
    <Wrapper className={`${props.className}`}>
      <Indicator isChecked={props.isChecked}/>
      {props.title}
    </Wrapper>
  );
};

export default CheckboxButton;
