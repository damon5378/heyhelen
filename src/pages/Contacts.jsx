import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import vk from "../img/vk.svg";
import insta from "../img/instagram.svg";
import youtube from "../img/youtube.svg";

export const Contacts = () => {
  return (
    <Hide>
      <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Title>
          <motion.h2 variants={titleAnim}>Контакты</motion.h2>
        </Title>
        <div>
          <Social variants={titleAnim}>
            <Circle>
              <a href="https://www.youtube.com/channel/UC5X7iRFTg24q8X01_W42OGg">
                <img src={youtube} alt="" />
              </a>
            </Circle>
          </Social>
          <Social variants={titleAnim}>
            <Circle>
              <a href="https://www.instagram.com/heyhelen_asmr/">
                <img src={insta} alt="" />
              </a>
            </Circle>
          </Social>
          <Social variants={titleAnim}>
            <Circle>
              <a href="https://vk.com/heyhelen_asmr">
                <img src={vk} alt="" />
              </a>
            </Circle>
          </Social>
        </div>
        <Social variants={titleAnim}>
          {/* <Circle>
            <a
              className="dev"
              href="https://www.instagram.com/chris_winchester53/"
            >
              <img src={insta} alt="" />
              <span>Связь с разработчиком)))</span>
            </a>
          </Circle> */}
        </Social>
      </ContactStyle>
    </Hide>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  h2 {
    color: #23d997;
  }
  @media (max-width: 414px) {
    margin-top: -25px;
  }
  @media (max-width: 320px) {
    h2 {
      position: absolute;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  display: inline-block;
  img {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    /* margin-bottom: 1rem; */
  }
  &:last-child {
    margin-top: -0.5rem;
    margin-bottom: 0;
  }
  .dev {
    color: #23d997;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-left: 572px;
    span {
      margin-left: 55px;
    }
  }
  @media (max-width: 1920px) {
    img {
      margin-top: 10px;
    }
  }
  @media (max-width: 1024px) {
    img {
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    img {
      margin-top: 10px;
    }
  }
  @media (max-width: 414px) {
    img {
      margin-top: 10px;
    }
  }
`;

const Social = styled(motion.div)`
  .dev {
  }
  display: inline-block;
  margin-left: 490px;
  margin-top: 200px;
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: row; */
  /* justify-content: center; */
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1920px) {
    margin-left: 350px;
  }
  @media (max-width: 1366px) {
    margin-left: 250px;
  }
  @media (max-width: 1024px) {
    margin-left: 150px;
  }
  @media (max-width: 866px) {
    margin-left: 310px;
    display: block;
  }
  @media (max-width: 768px) {
    margin-left: 250px;
    margin-top: 80px;
  }
  @media (max-width: 576px) {
    margin-left: 160px;
  }
  @media (max-width: 414px) {
    margin-left: 70px;
    margin-top: 30px;
  }
  @media (max-width: 375px) {
    margin-left: 63px;
    margin-top: 20px;
  }
  @media (max-width: 320px) {
    margin-left: 50px;
    margin-top: 50px;
  }
`;
