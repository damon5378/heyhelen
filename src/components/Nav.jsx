import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/heyhelen/" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/heyhelen/videos">Видео</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/heyhelen/videos" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/heyhelen/merch">Мерч</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/heyhelen/merch" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/heyhelen/contacts">Контакты</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/heyhelen/contacts" ? "45%" : "0%",
            }}
          />
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
  @media (max-width: 1050px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 65%;
  border-radius: 15px;
  @media (max-width: 576px) {
    left: 0%;
  }
`;
