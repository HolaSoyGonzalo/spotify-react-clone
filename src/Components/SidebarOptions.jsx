import React from "react";
import styled from "styled-components";

function SidebarOptions({ option = "test", Icon }) {
  return (
    <SidebarOption>
      {Icon && <SideBarOptionIcon />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </SidebarOption>
  );
}

export default SidebarOptions;

const SidebarOption = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 40px;
  color: grey;
  transition: 200ms color ease-in;
  :hover {
    color: white;
  }
`;

const SideBarOptionIcon = styled.img`
  padding-left: 10px;
  padding-right: 10px;
  p {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
  }
`;
