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
  margin-bottom: 4rem;
  color: #23d997;
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
    margin-bottom: 1rem;
  }
  &:last-child {
    margin-top: -0.5rem;
    margin-bottom: 0;
  }
`;

const Social = styled(motion.div)`
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
`;
