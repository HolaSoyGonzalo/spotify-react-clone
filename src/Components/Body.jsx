import React from "react";

import BodyHeader from "./BodyHeader";
import SongRow from "./SongRow";
import { useStateValue } from "../Utils/stateProvider";

import "../Styling/Body.css";
import styled from "styled-components";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcHdPj0cTbLYe`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <Container>
      <BodyHeader spotify={spotify} />

      <Infos>
        <img src={discover_weekly?.images[0].url} alt="" />
        <InfoText>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </InfoText>
      </Infos>

      <BodySongs>
        <BodyIcons>
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </BodyIcons>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </BodySongs>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  padding: 30px;
  width: 100%;
  height: 100vh;
  overflow-y: overlay;
  flex: 0.8;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(91, 87, 115);
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`;

const InfoText = styled.div`
  flex: 1;
  h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
`;

const BodySongs = styled.div`
  z-index: 1;
  margin: 20px -30px;
`;

const BodyIcons = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;
