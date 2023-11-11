import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
${reset}

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
a{
  text-decoration: none;
  color: inherit;
}
`;
