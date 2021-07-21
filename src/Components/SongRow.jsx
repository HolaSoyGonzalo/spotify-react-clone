import React from "react";
import styled from "styled-components";
function SongRow({ track, playSong }) {
  console.log(track);
  return (
    <Container onClick={() => playSong(track.id)}>
      <AlbumCover src={track.album.images[0].url} alt="" />
      <SongInfo>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </SongInfo>
    </Container>
  );
}

export default SongRow;

const Container = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;
  :hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
`;

const SongInfo = styled.div`
  margin-left: 20px;
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`;

const AlbumCover = styled.img`
  height: 40px;
  width: 40px;
`;
