import React from "react";
import helen from "../img/helen.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>
              Самая <span>очаровательная</span>
            </h2>
          </Hide>
          <Hide>
            <h2>девушка русскоязычного</h2>
          </Hide>
          <Hide>
            <h2 className="additional_class">
              АСМР на <span className="youtube">Youtube</span>
            </h2>
          </Hide>
        </div>
        <p>Contact me</p>
        <button>Contact me</button>
      </Description>
      <Image>
        <img style={{ borderRadius: 25 }} src={helen} alt="Cutie Helen" />
      </Image>
    </About>
  );
};

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
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
  /* img {
    width: 50%;
    height: 50vh;
    object-fit: cover;
  } */
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
