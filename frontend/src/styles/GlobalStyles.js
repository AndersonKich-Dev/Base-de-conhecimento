import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
   
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  }

  h1, p {
    margin: 0;
    padding: 0;
   
  }

  h1, h2{
    font-family: Verdana, Geneva, Tahoma, sans-serif ;
    color: #fff; 
  }

  p{
    //font-family: Impact ;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    color: #E3E4E4;
  }
`;