import React from 'react';
import styled from "styled-components";
import Clock from "./widgets/clock";
import ButtonTitled from "./widgets/button-titled";
import CheckboxButton from "./widgets/checkbox-button";
import Scheme from "./widgets/scheme";
import RootStore from './stores/root';

const Main = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ContentWrap = styled.div`  
  & > *:not(:first-child) {
    margin-top: 40px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const RootStoreInstance = new RootStore();

export const RootStoreContext = React.createContext(RootStoreInstance);

function App() {
  return (
    <RootStoreContext.Provider value={RootStoreInstance}>
      <Main>
        <ContentWrap>
          <Menu>
            <ButtonTitled title={'Stop'} onClick={() => {}}/>
            <ButtonTitled title={'Pause'} onClick={() => {}}/>
            <CheckboxButton title={'Repeat'} onClick={() => {}} isChecked={true}/>
          </Menu>
          <Clock />
          <Scheme />
        </ContentWrap>
      </Main>
    </RootStoreContext.Provider>
  );
}

export default App;
