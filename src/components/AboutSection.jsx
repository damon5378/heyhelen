import React from "react";
import helen from "../img/helen5.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { zoom } from "../animation";
import { Wave } from "./Wave";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: -60 },
    show: {
      x: -35,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };

  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2
              variants={titleAnimation}
              // initial="hidden"
              // animate="show"
            >
              Самая <span>очаровательная</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              девушка русскоязычного
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} className="additional_class">
              АСМР на <span className="youtube">Youtube</span>
            </motion.h2>
          </Hide>
        </motion.div>
        {/* <p>Contact me</p>
        <button>Contact me</button> */}
      </Description>
      <Image>
        <motion.img
          variants={zoom}
          initial="hidden"
          animate="show"
          style={{ borderRadius: 25 }}
          src={helen}
          alt="Cutie Helen"
          className="helen"
        />
      </Image>
      <Wave />
    </About>
  );
};

const About = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  overflow-x: hidden;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    /* text-align: center; */
  }
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
  @media (max-width: 576px) {
    overflow-x: hidden;
  }
  @media (max-width: 414px) {
    overflow-x: hidden;
  }
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
  @media (max-width: 320px) {
    overflow-x: hidden;
  }
`;

const Description = styled.div`
  flex: 1;
  padding-left: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 414px) {
    h2 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 375px) {
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 320px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 99%;
    height: auto;
    object-fit: cover;
    border: 5px solid #23d997;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
