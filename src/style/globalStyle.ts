import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import mainBackground from '../assets/background.png';
import textBackground from '../assets/background-title.png';
import mediaQuery from './media';

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
  --content-width: 420px;
}

* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR' !important;
}

html {
  font-size: 62.5%;
  /* rem 값의 기준을 잡기 위함 16px -> 10px */
  background-color: #F4F6F9;
}

body {
  overflow: hidden;
  margin: 0;
  background: url(${mainBackground}) no-repeat center / cover;
  -ms-overflow-style: none;
}

body::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  background: url(${textBackground}) no-repeat center/contain;
  width: 385px;
  height: 238px;
}

input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  border: none;
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
  max-width: var(--content-width);
  min-height: 100vh;
  background: #fff;
  margin-left: 50%;
  overflow: hidden;
}

@font-face {
	font-family: 'UhBeeSe_hyun';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

img {
  max-width: 100%;
  vertical-align: top;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

input[type="search"]::-moz-search-clear-button {
    display: none;
}

::-webkit-scrollbar {
  display: none;
}

.hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

${mediaQuery('mediumDevice')(css`
  #root {
    margin: 0 auto;
  }
`)}

${mediaQuery('mediumDevice')(css`
  body::before {
    content: none;
  }
`)}
`;
