import React from "react";
import styled from "styled-components";
import girl from "../img/qa/girl.svg";
import ukraine from "../img/qa/ukraine.svg";
import glasses from "../img/qa/glasses.svg";
import shoe from "../img/qa/shoe.svg";
import cat from "../img/qa/cat.svg";

export const QASection = () => {
  return (
    <QA>
      <h2>
        Частозадаваемые <span>вопросы</span>
      </h2>
      <div className="question">
        <h4>Как тебя зовут?</h4>
        <div className="answer">
          <p>Елена</p>
          <img src={girl} alt="" />
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Сколько тебе лет?</h4>
        <div className="answer">
          <p>27</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Когда у тебя день рождения?</h4>
        <div className="answer">
          <p>18 июня</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Где ты живёшь?</h4>
        <div className="answer">
          <p>В Украине, город не афиширую</p>
          <img src={ukraine} alt="" />
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какой у тебя рост?</h4>
        <div className="answer">
          <p>169 см</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какое у тебя зрение?</h4>
        <div className="answer">
          <p>Минус 5</p>
          <img src={glasses} alt="" />
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какой у тебя размер ноги?(Да-да, и такое спрашивают)</h4>
        <div className="answer">
          <p>37</p>
          <img src={shoe} alt="" />
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Есть ли у тебя домашние питомцы?</h4>
        <div className="answer">
          <p>Да. две кошки - Миа и Алиса (беспородные)</p>
          <img src={cat} alt="" />
          <img src={cat} alt="" />
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какой у тебя любимый цвет?</h4>
        <div className="answer">
          <p className="black">Чёрный</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какие языки ты знаешь?</h4>
        <div className="answer">
          <p>Украинский, Русский и Английский</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какой у тебя телефон?</h4>
        <div className="answer">
          <p>Iphone 11 Pro Max</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Кто ты по образованию?</h4>
        <div className="answer">
          <p>Менеджер по туризму и экскурсовод</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Откуда узнала об АСМР?</h4>
        <div className="answer">
          <p>Случайно увидела видео на youtube 5 лет назад</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Как давно смотришь АСМР?</h4>
        <div className="answer">
          <p>5 лет</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Кто твой любимый АСМРтист?</h4>
        <div className="answer">
          <p>Gentle Whispering ASMR</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какие у тебя любимые триггеры?</h4>
        <div className="answer">
          <p>Шёпот, шуршание, липкие звуки</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Как давно ведёшь канал?</h4>
        <div className="answer">
          <p>2,5 года</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Почему решила снимать АСМР?</h4>
        <div className="answer">
          <p>
            Решила попробовать себя в новом жанре, так как без АСМР не проходит
            ни дня моей жизни :3
          </p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какая у тебя любимая книга?</h4>
        <div className="answer">
          <p>Б. Вербер «Империя ангелов»</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какой у тебя любимый фильм?</h4>
        <div className="answer">
          <p>Трилогия "Властелин колец"</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какую музыку слушаешь?</h4>
        <div className="answer">
          <p>
            Я меломан, слушаю по настроению все от Feduka до Рамштайна, любимые
            направления Indie, Rock, Alternative, Pop.
          </p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Сколько у тебя мониторов?</h4>
        <div className="answer">
          <p>Два штуки</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>На какую камеру снимаешь видео?</h4>
        <div className="answer">
          <p>Canon 80D</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>На какую камеру стримишь?</h4>
        <div className="answer">
          <p>Sony a6000, Sigma 16mm f1.4</p>
        </div>
        <div className="qa_line"></div>
      </div>

      <div className="question">
        <h4>Какие характеристики твоего ПК?</h4>
        <div className="answer">
          <p>Процессор i7 6700k</p>
          <p>Видеокарта GTX 1080</p>
          <p>Оперативная память 32 GB</p>
          <p>SSD 512 GB</p>
          <p>Клавиатура HyperX Alloy FPS Pro</p>
          <p>Мышь a4tech Bloody V7</p>
          <p>Мониторы Asus MG248Q, LG 23MP68VQ-P</p>
        </div>
        <div className="qa_line"></div>
      </div>
    </QA>
  );
};

const QA = styled.div`
  min-height: 90vh;
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      display: inline-block;
      vertical-align: middle;
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
  /* span {
    display: block;
  } */
`;
