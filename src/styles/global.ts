import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Almendra&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Almendra';
}

body{
    min-height: 100vh;
}

button{
    cursor: pointer;
    background-color: transparent;
    border: none
}
`;

export default GlobalStyles;
