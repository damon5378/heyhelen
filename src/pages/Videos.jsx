import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation, slider } from "../animation";
import { ScrollTop } from "../components/ScrollTop";

export const Videos = () => {
  return (
    <VideosList
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>

      <Video>
        <h2>🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗</h2>
        <iframe
          width="720"
          height="480"
          title="ASMR
          SLEEP IN 20 MINUTES"
          src="https://www.youtube.com/embed/alBWW6z3iU8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗</h2>
        <iframe
          width="720"
          height="480"
          title="ASMR
          SLEEP IN 20 MINUTES"
          src="https://www.youtube.com/embed/3vmwl9Qsrww"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗</h2>
        <iframe
          width="720"
          height="480"
          title="ASMR
          SLEEP IN 20 MINUTES"
          src="https://www.youtube.com/embed/hwn8hJMx2Uo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>
          АСМР ЧЕРЕЗ 20 МИНУТ ТЫ УСНЕШЬ 🤗 БЛИЗКИЙ ШЕПОТ С УШКА НА УШКО | ASMR
          SLEEP IN 20 MINUTES
        </h2>
        <iframe
          width="720"
          height="480"
          title="ASMR
          SLEEP IN 20 MINUTES"
          src="https://www.youtube.com/embed/6e0cqWbxMtE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>
          РАДИОАКТИВНЫЙ АСМР ОТ LEWITT ☢️ ЧТО В ЧЕРНОМ ЯЩИКЕ? | ASMR WHATS IN
          THE BOX? TINGLES FROM LEWITT
        </h2>
        <iframe
          width="720"
          height="480"
          title="ASMR WHATS IN
          THE BOX? TINGLES FROM LEWITT"
          src="https://www.youtube.com/embed/0NNgKBRGPD8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>АСМР ДЛЯ НОВОГОДНЕГО НАСТРОЕНИЯ 🎄 ASMR FOR CHRISTMAS MOOD</h2>
        <iframe
          width="720"
          height="480"
          title="ASMR FOR CHRISTMAS MOOD"
          src="https://www.youtube.com/embed/a1Cu4vOCKuY"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>
          АСМР ВЗРЫВ МУРАШЕК 101% УДОВОЛЬСТВИЯ ✨ ASMR TINGLE EXPLOSION 101%
        </h2>
        <iframe
          width="720"
          height="480"
          title="ASMR TINGLE EXPLOSION 101%"
          src="https://www.youtube.com/embed/ON6mPBetRNw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>

      <Video>
        <h2>💖 ТВОЕ ЛЮБИМОЕ НЕЖНОЕ АСМР 💖 YOUR FAVOURITE SWEET ASMR</h2>
        <iframe
          width="720"
          height="480"
          title="YOUR FAVOURITE SWEET ASMR"
          src="https://www.youtube.com/embed/jNP7VjmZakU"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>
      {/* stateVideo.map(video => <Video title={video.title}/>) если юзать API */}
      <Video>
        <h2>АСМР ПОЧИНЮ ТЕБЯ ⚙️ РЕМОНТ ТВОИХ УШЕК ⚡ ASMR FIXING YOU</h2>
        <iframe
          width="720"
          height="480"
          title="ASMR FIXING YOU"
          src="https://www.youtube.com/embed/oCZA5rgGa0A"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Video>
      <ScrollTop />
    </VideosList>
  );
};

const VideosList = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100vh;
  overflow: hidden;
`;

const Video = styled.div`
  padding-bottom: 5rem;
  h2 {
    font-size: 1.2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    max-width: 540px;
    width: 100%;
    color: #fff;
    margin: 0 auto;
  }
  iframe {
    /* margin-left: 55rem; */
    border: 5px solid #23d997;
    border-radius: 25px;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
