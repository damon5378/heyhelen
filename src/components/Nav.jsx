import React from "react";
import styled from "styled-components";

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          HeyHelen ASMR
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">Обо мне</a>
        </li>
        <li>
          <a href="#">Мои видео</a>
        </li>
        <li>
          <a href="#">Контакты</a>
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
