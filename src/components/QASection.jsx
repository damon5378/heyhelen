import React from "react";
import styled from "styled-components";
import ukraine from "../img/qa/ukraine.svg";
import glasses from "../img/qa/glasses.svg";
import shoe from "../img/qa/shoe.svg";
import cat from "../img/qa/cat.svg";
import russia from "../img/qa/russia.svg";
import apple from "../img/qa/apple.svg";
import kitty from "../img/qa/kitty.svg";
import uk from "../img/qa/uk.svg";
import helen from "../img/qa/helen.jpg";
import { Toggle } from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

export const QASection = () => {
  const [element, controls] = useScroll();

  return (
    <QA>
      <h2>
        Частозадаваемые <span>вопросы</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Как тебя зовут?">
          <div className="answer">
            <p>Елена</p>
            <img style={{ borderRadius: 25 }} src={helen} alt="" />
          </div>
        </Toggle>

        <Toggle title="Сколько тебе лет?">
          <div className="answer">
            <p>27</p>
          </div>
        </Toggle>

        <Toggle title="Когда у тебя день рождения?">
          <div className="answer">
            <p>18 июня</p>
          </div>
        </Toggle>

        <Toggle title="Где ты живёшь?">
          <div className="answer">
            <p>В Украине, город не афиширую</p>
            <img src={ukraine} alt="" />
          </div>
        </Toggle>

        <Toggle title="Какой у тебя рост?">
          <div className="answer">
            <p>169 см</p>
          </div>
        </Toggle>

        <Toggle title="Какое у тебя зрение?">
          <div className="answer">
            <p>Минус 5</p>
            <img src={glasses} alt="" />
          </div>
        </Toggle>

        <Toggle title="Какой у тебя размер ноги?(Да-да, и такое спрашивают)">
          <div className="answer">
            <p>37</p>
            <img src={shoe} alt="" />
          </div>
        </Toggle>

        <Toggle title="Есть ли у тебя домашние питомцы?">
          <div className="answer">
            <p>Да. две кошки - Миа и Алиса (беспородные)</p>
            <img src={cat} alt="" />
            <img src={kitty} alt="" />
          </div>
        </Toggle>

        <Toggle title="Какой у тебя любимый цвет?">
          <div className="answer">
            <p className="black">Чёрный</p>
          </div>
        </Toggle>

        <Toggle title="Какие языки ты знаешь?">
          <div className="answer">
            <p>Украинский, Русский и Английский</p>
            <img src={ukraine} alt="" />
            <img src={russia} alt="" />
            <img style={{ borderRadius: 23 }} src={uk} alt="" />
          </div>
        </Toggle>

        <Toggle title="Какой у тебя телефон?">
          <div className="answer">
            <p>Iphone 11 Pro Max</p>
            <img src={apple} alt="" />
          </div>
        </Toggle>

        <Toggle title="Кто ты по образованию?">
          <div className="answer">
            <p>Менеджер по туризму и экскурсовод</p>
          </div>
        </Toggle>

        <Toggle title="Откуда узнала об АСМР?">
          <div className="answer">
            <p>Случайно увидела видео на youtube 5 лет назад</p>
          </div>
        </Toggle>

        <Toggle title="Как давно смотришь АСМР?">
          <div className="answer">
            <p>5 лет</p>
          </div>
        </Toggle>

        <Toggle title="Кто твой любимый АСМРтист?">
          <div className="answer">
            <p>Gentle Whispering ASMR</p>
          </div>
        </Toggle>

        <Toggle title="Какие у тебя любимые триггеры?">
          <div className="answer">
            <p>Шёпот, шуршание, липкие звуки &#128523;</p>
          </div>
        </Toggle>

        <Toggle title="Как давно ведёшь канал?">
          <div className="answer">
            <p>2,5 года</p>
          </div>
        </Toggle>

        <Toggle title="Почему решила снимать АСМР?">
          <div className="answer">
            <p>
              Решила попробовать себя в новом жанре, так как без АСМР не
              проходит ни дня моей жизни &#128540;
            </p>
          </div>
        </Toggle>

        <Toggle title="Какая у тебя любимая книга?">
          <div className="answer">
            <p>Б. Вербер «Империя ангелов»</p>
          </div>
        </Toggle>

        <Toggle title="Какой у тебя любимый фильм?">
          <div className="answer">
            <p>Трилогия "Властелин колец"</p>
          </div>
        </Toggle>

        <Toggle title="Какую музыку слушаешь?">
          <div className="answer">
            <p>
              Я меломан, слушаю по настроению все от Feduka до Рамштайна,
              любимые направления Indie, Rock, Alternative, Pop.
            </p>
          </div>
        </Toggle>

        <Toggle title="Сколько у тебя мониторов?">
          <div className="answer">
            <p>Два штуки</p>
          </div>
        </Toggle>

        <Toggle title="На какую камеру снимаешь видео?">
          <div className="answer">
            <p>Canon 80D</p>
          </div>
        </Toggle>

        <Toggle title="На какую камеру стримишь?">
          <div className="answer">
            <ul>
              <li>
                <p>Sony &alpha; a6000</p>
              </li>
              <li>
                <p>Sigma 16mm f1.4</p>
              </li>
            </ul>
          </div>
        </Toggle>

        <Toggle title="Какие характеристики твоего ПК?">
          <div className="answer">
            <ul>
              <li>
                <p>Процессор i7 6700k</p>
              </li>
              <li>
                <p>Видеокарта GTX 1080</p>
              </li>
              <li>
                <p>Оперативная память 32 GB</p>
              </li>
              <li>
                <p>SSD 512 GB</p>
              </li>
              <li>
                <p>Клавиатура HyperX Alloy FPS Pro</p>
              </li>
              <li>
                <p>Мышь a4tech Bloody V7</p>
              </li>
              <li>
                <p>Мониторы Asus MG248Q, LG 23MP68VQ-P</p>
              </li>
            </ul>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </QA>
  );
};

const QA = styled(motion.div)`
  min-height: 90vh;
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h4 {
    padding-bottom: 2rem;
    font-weight: lighter;
    outline: none;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    outline: none;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      display: inline-block;
      vertical-align: middle;
      font-size: 2.2rem;
    }
    img {
      width: 70px;
      height: 70px;
      margin-left: 15px;
      vertical-align: middle;
    }
    .black {
      color: #000;
      font-weight: bold;
      border: 3px solid black;
      padding: 1px 10px;
      border-radius: 10px;
    }
  }
  .qa_line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer:last-child {
    display: block;
  }
  /* span {
    display: block;
  } */
  @media (max-width: 414px) {
    h2 {
      font-size: 3rem;
    }
    .qa_line {
      width: 100%;
    }
  }
  @media (max-width: 320px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
