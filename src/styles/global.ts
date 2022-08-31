import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['--cyan-500']};
    }

    body {
        background: ${(props) => props.theme['--grey-900']};
        color: ${(props) => props.theme['--white']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }
`;
