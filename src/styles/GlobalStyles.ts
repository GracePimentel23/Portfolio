import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 15px;
    scroll-behavior: smooth;
    scroll-padding-top: 80px;

    @media (min-width: 1200px) {
      font-size: 16px;
    }

    @media (min-width: 1600px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, 
      #FFFFFF 0%,
      #FFFFFF 15%,
      #F0F7FF 30%,
      #E1EFFF 45%,
      #C5E3FF 60%,
      #A3D2FF 75%,
      #4A90E2 90%,
      #4A90E2 100%
    );
    background-attachment: fixed;
    position: relative;
    min-height: 100vh;
    color: #2C3E50;
    overflow-x: hidden;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 0% 0%, rgba(74, 144, 226, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 100% 100%, rgba(74, 144, 226, 0.03) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }
  }

  p {
    margin: 0;
    line-height: 1.6;
    font-size: 1rem;
    
    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }
  }

  a {
    color: #4A90E2;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #357ABD;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .MuiContainer-root {
    max-width: 1400px !important;
  }

  .MuiTypography-root {
    font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #FFFFFF;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(74, 144, 226, 0.3);
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4A90E2;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export default GlobalStyles; 