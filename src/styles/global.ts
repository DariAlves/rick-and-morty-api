import { createGlobalStyle } from 'styled-components';

import rickBackground from '../assets/rick.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
    background: #262c3a url(${rickBackground}) no-repeat center center;
    background-size: cover;

  }

  #root {
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
  }
`;
