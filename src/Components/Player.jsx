import React from "react";

import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import styled from "styled-components";

function Player({ spotify }) {
  return (
    <Container>
      <PlayerBody>
        <Sidebar />
        <Body spotify={spotify} />
      </PlayerBody>
      <Footer spotify={spotify} />
    </Container>
  );
}

export default Player;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerBody = styled.div`
  display: flex;
  flex-grow: 1;
`;
