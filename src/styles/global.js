import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #bbcdf3;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeLegibility !important;
}

html, body, #root{
  height: 100%;
}

input, button{
  font-family: 'Roboto', sans-serif;
}

button{
  cursor: pointer;
}
`;
