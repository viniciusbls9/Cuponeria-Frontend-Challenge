import styled from 'styled-components';

export const Menu = styled.header`
    background-color: var(--color-background-header);
    height: 15.37rem;

    .header {
        color: var(--color-text-white);
        padding-top: 1.87rem;
    }

    .header .header-content {
        display: flex;
        align-items: center;

        @media(min-width: 1100px) {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
        }
    }

    .header .header-content .container-img img {
        margin-right: 1.25rem;
        margin-left: 1.87rem;
    }

    .header .container-title h1 {
        font: 700 1.87rem Roboto;
        text-transform: uppercase;

        @media(min-width: 1100px) {
            text-align: center;
        }
    }

    .header-buttons {
        padding: 4.3rem 0 1.45rem 0;
        padding-left: 1.87rem;
        display: flex;

        @media(min-width: 1100px) {
            align-items: center;
            justify-content: center;
        }
    }

    .header-buttons a {
        width: 9.18rem;
        height: 3.18rem;
        background-color: var(--color-background-yellow);
        border-radius: 0.62rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: var(--color-background-header);
        font: 700 1rem Roboto;
        text-transform: uppercase;
    }

    .header-buttons a img {
        margin-right: 0.8rem;
    }
`;