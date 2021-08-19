import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    --header-height: 56px;
    --header-font-size: 1.5rem;
    --header-center-max-width: 728px;
    
    --guide-width: 240px;
    
    --mini-guide-width: 72px;
    --mini-guide-nav-item-height: 74px;
    
    --content-margin-top: var(---header-height);
    
    --header-z-index: 1;
    --mini-guide-z-index: var(--header-z-index);
    --modal-block-z-index: calc(var(--header-z-index) + 1);
    --search-with-voice-z-index: calc(var(--header-z-index) + 2);
    --guide-z-index: calc(var(--header-z-index) + 2);
    --home-content-filter-height: 56px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 60%);
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(0, 0%, 80%);
  }
  a {
    text-decoration: none;
  }
  a:link {
   color: red; 
  }
  a:visited {
    color: hsl(0, 0%, 40%);
  }
  a:hover {
    background-color: hsl(0, 0%, 95%);
  }
  a:active {
    color: rgb(3, 3, 3);
  }
  hr {
    margin: 0;
    width: 100%;
    border: none;
    border-top: 1px solid hsl(0, 0%, 80%);
  }
`