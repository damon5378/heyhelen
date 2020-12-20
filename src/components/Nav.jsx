import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink to="/heyhelen/" id="logo">
          HeyHelen ASMR
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/heyhelen/">Обо мне</NavLink>
        </li>
        <li>
          <NavLink to="/heyhelen/videos">Мои видео</NavLink>
        </li>
        <li>
          <NavLink to="/heyhelen/contacts">Контакты</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  box-shadow: 0px 5px 5px #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: #23d997;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 3rem;
    font-family: "Courgette", cursive;
  }
`;
