import React from "react";
// import { FaMicrophone } from "react-icons";
import styled from "styled-components";
import helen from "../img/helen4.jpg";
import brush from "../img/brush.svg";
import micro from "../img/micro.svg";
import wood from "../img/wood.svg";
import headset from "../img/headset.svg";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

export const TriggersSection = () => {
  const [element, controls] = useScroll();

  return (
    <Triggers
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Некоторые <span>триггеры</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={brush} alt="" />
              <h3>Кисточка</h3>
            </div>
            <p>Отлично мурашит, проводя лёгкими движениями по микрофону</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={micro} alt="" />
              <h3>Микрофон</h3>
            </div>
            <p>Сам по себе триггер, без которого невозможен АСМР</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={wood} alt="" />
              <h3>Дерево</h3>
            </div>
            <p>Классный звук при постукивании по дереву</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={headset} alt="" />
              <h3>Наушники</h3>
            </div>
            <p>Отменное мурашество достигается именно в наушниках</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={helen} alt="" />
      </Image>
    </Triggers>
  );
};

const Triggers = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
    font-size: 1.1rem;
  }
`;

const Description = styled.div`
  flex: 1;
  padding-left: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border: 5px solid #23d997;
    border-radius: 25px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
`;

const Card = styled.div`
  flex-basis: 22rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: #000;
      padding: 1rem;
      border-radius: 20px;
    }
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
