import React from "react";

import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { useStateValue } from "../Utils/stateProvider";
import styled from "styled-components";
function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <Container>
      <Logo
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={HomeIcon} option="Home" />
      <SidebarOptions Icon={SearchIcon} option="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <Title>PLAYLISTS</Title>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions option={playlist.name} />
      ))}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 230px;
  height: 100vh;
  color: white;
  background-color: #040404;
`;

const Title = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
`;

const Logo = styled.img`
  margin-right: auto;
  object-fit: contain;
  height: 70px;
  padding: 10px;
`;
