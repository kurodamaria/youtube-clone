import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    /* dimensions */
    --header-height: 56px;
    --header-font-size: 1.5rem;
    --header-center-max-width: 728px;

    --guide-width: 240px;

    --mini-guide-width: 72px;
    --mini-guide-nav-item-height: 74px;

    --content-margin-top: var(---header-height);

    --home-content-filter-height: 56px;

    /* z-index fucking hell */
    --header-z-index: 3;
    --mini-guide-z-index: 2;
    --modal-block-z-index: 4;
    --guide-z-index: 5;
    --home-content-filter-z-index: 2;
    --modal-dialog-z-index: 99999;
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
    color: hsl(0, 0%, 0%);
  }

  a:visited {
    color: hsl(0, 0%, 0%);
  }

  a:hover {
    color: hsl(0, 0%, 0%);
    background-color: hsl(0, 0%, 95%);
  }

  a:active {
    color: hsl(0, 0%, 0%);
  }

  hr {
    margin: 0;
    width: 100%;
    border: none;
    border-top: 1px solid hsl(0, 0%, 80%);
  }
`