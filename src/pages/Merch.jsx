import React from "react";
import styled from "styled-components";
import item1 from "../img/merch/11.png";
import item2 from "../img/merch/12.png";
import item3 from "../img/merch/13.png";
import item4 from "../img/merch/14.png";
import item5 from "../img/merch/15.png";
import item6 from "../img/merch/16.png";
import item7 from "../img/merch/17.png";
import item8 from "../img/merch/18.png";
import item9 from "../img/merch/19.png";
import item10 from "../img/merch/20.png";
import item11 from "../img/merch/21.png";
import item12 from "../img/merch/22.png";
import item13 from "../img/merch/23.png";
import item14 from "../img/merch/24.png";
import item15 from "../img/merch/25.png";

export const Merch = () => {
  return (
    <>
      <MerchTitle>Леночкин Мерч &#128540;</MerchTitle>

      <MerchList>
        <MerchItem>
          <img src={item1} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item2} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item3} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item4} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item5} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item6} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item7} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item8} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item9} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item10} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item11} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item12} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item13} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item14} alt="" />
        </MerchItem>

        <MerchItem>
          <img src={item15} alt="" />
        </MerchItem>
      </MerchList>
    </>
  );
};

const MerchList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 45px;
  padding-bottom: 30px;
`;

const MerchTitle = styled.h1`
  padding-top: 30px;
  font-size: clamp(2rem, 2vw, 3rem);
  color: #23d997;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MerchItem = styled.div`
  padding-bottom: 30px;
  img {
    width: 400px;
    height: 490px;
    border: 3px solid #23d997;
    border-radius: 25px;
    @media (max-width: 414px) {
      width: 250px;
      height: 330px;
    }
  }
`;
