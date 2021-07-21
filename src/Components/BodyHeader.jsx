import React from "react";
import styled from "styled-components";
import { useStateValue } from "../Utils/stateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function BodyHeader({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Container>
      <Left>
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </Left>
      <Right>
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </Right>
    </Container>
  );
}

export default BodyHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;
  input {
    border: none;
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 10px;
  }
`;
