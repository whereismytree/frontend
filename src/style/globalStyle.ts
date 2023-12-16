import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import mainBackground from '../assets/background.png';
import textBackground from '../assets/background-title.png';

export default createGlobalStyle`
${reset}

:root {
  --main-green: #1F7158;
  --main-black: #1A1A1A;
  --main-white: #FFFFFF;
  --grey-light: #F1F1F1;
  --grey-medium: #B9B9B9;
  --grey-dark: #878787;
  --header-height: 7.6rem;
  --navbar-height: 10rem;
}

* {
  box-sizing: border-box;
  font-family: 'Pretendard Variable' !important;
}

html {
  font-size: 62.5%;
  /* rem 값의 기준을 잡기 위함 16px -> 10px */
  background-color: #F4F6F9;
}

body {
  margin: 0;
  background: url(${mainBackground}) no-repeat center / cover;
}

input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

input:focus {
  outline: none;
}

button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

#root {
  max-width: 420px;
  min-height: 100vh;
  background: #fff;
  margin-left: 50%;
}

img {
  max-width: 100%;
  vertical-align: top;
}

@media screen and (max-width: 868px) {
  #root {
    margin: 0 auto;
  };
}

@media screen and (min-width: 868px) {
  body::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    background: url(${textBackground}) no-repeat center/contain;
    width: 385px;
    height: 238px;
  } 
}
`;
