import React from "react";
import styled from "styled-components";

import { loginUrl } from "../Utils/spotify";

function Login() {
  return (
    <Container>
      <Logo
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />

      <LoginButton href={loginUrl}>LOGIN WITH SPOTIFY</LoginButton>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`;

const Logo = styled.img`
  max-width: 50%;
`;

const LoginButton = styled.a`
  padding: 20px;
  background-color: #1db954;
  border-radius: 99px;
  font-weight: 800;
  color: white;
  text-decoration: none;
`;
