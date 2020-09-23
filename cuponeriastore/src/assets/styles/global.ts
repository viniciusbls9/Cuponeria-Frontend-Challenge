import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    /* font-size: 60%; */
    --color-background-body: #F2F2F2;
    --color-background-white: #fff;
    --color-background-yellow: #FAD424;
    --color-background-black: #000000;
    --color-background-header: #111111;
    --color-text-white: #ffffff;
    --color-text-black: #000000;
    --color-shadow: rgba(23, 29, 41, 0.12);
    --color-bg-badge: #FF0000;
    --color-text-paragraph: #A8A4A4;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100vh;
}

button {
    border: 0;
}

body {
    background-color: var(--color-background-body);
}

/* @media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
} */

`;