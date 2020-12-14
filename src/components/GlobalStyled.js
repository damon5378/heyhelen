import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: rgba(155, 155, 155, .5) transparent;
    }
    *::-webkit-scrollbar{
        width: 10px;
    }
    *::-webkit-scrollbar-track{
        background: transparent;
    }
    *::-webkit-scrollbar-thumb{
        background: linear-gradient(#5750c3, #fd2d46);
        border: transparent;
        border-radius: 20px;
    }
    body{
        background: #1b1b1b;
        font-family: 'El Messiri', sans-serif;
    }
    button{
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all .5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        color: #23d997;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: white;
        font-size: 1.4rem;
        line-height: 150%;
    }
    .additional_class{
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .youtube{
        font-weight: bold;
        background-color: red;
        color: white;
        padding: 0 15px 0 15px;
        border-radius: 25px;
    }
`;

export default GlobalStyles;
