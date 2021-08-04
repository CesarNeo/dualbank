import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: #E5E5E5;
        --purple-primary: #622EE5;
        --text-positive: #69D531;  
        --color-icon-text: #172765;
    }

    html {
        height: 100%;
    }
 
    body {
        background: var(---background);
        color: var(--color-icon-text);
    }

    body, input, button {
        font-family: 'Lato', serif;
    }


    button {
        border: none;
        background: none;
        cursor: pointer;

        color: var(--color-icon-text);
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;