import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  outline: 0px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
}
body {
  background: #312E38 ;
  color: #FFF;
  -webkit-font-smoothing: antialiased;

}
body, input, button {
  font-family: 'Roboto slab', serif;
  font-size: 16px;
}
h1, h2, h3, h4 ,h4 ,h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;
