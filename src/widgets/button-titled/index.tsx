import React, {FC} from 'react';
import styled from "styled-components";

export type OnClickCallback = () => void;

export type ButtonTitledProps = {
  title: string;
  onClick: OnClickCallback;
  className?: string;
};

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  flex-shrink: 0;
  color: #3e3e3e;
  font-weight: bold;
  background: white;
  font-size: 1.5rem;
`;

const ButtonTitled: FC<ButtonTitledProps> = (props) => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <Wrapper onClick={onClick} className={`${props.className}`}>
      {props.title}
    </Wrapper>
  );
};

export default ButtonTitled;
