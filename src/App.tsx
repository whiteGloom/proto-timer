import React from 'react';
import styled from "styled-components";
import Clock from "./widgets/clock";
import ButtonTitled from "./widgets/button-titled";
import CheckboxButton from "./widgets/checkbox-button";
import Sequence from "./widgets/sequence";

const StyledApp = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  margin-top: 160px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;

  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;

const ClockWrapper = styled.div`
  padding: 10px;
  border: 1px solid white;
  border-radius: 58px;
  margin-top: 40px;
`;

const StyledSequence = styled(Sequence)`
  margin-top: 40px;
`;

function App() {
  return (
    <StyledApp>
      <Main>
        <ContentWrap>
          <Menu>
            <ButtonTitled title={'Stop'} onClick={() => {}}/>
            <ButtonTitled title={'Pause'} onClick={() => {}}/>
            <CheckboxButton title={'Repeat'} onClick={() => {}} isChecked={true}/>
          </Menu>
          <ClockWrapper>
            <Clock />
          </ClockWrapper>
          <StyledSequence />
        </ContentWrap>
      </Main>
    </StyledApp>
  );
}

export default App;
