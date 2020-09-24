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
        overflow-x: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        @media(min-width: 1100px) {
            align-items: center;
            justify-content: center;
        }
    }

    .header-buttons::-webkit-scrollbar-track {
        background-color: #ddd;
        height: 4px;
    }

    .header-buttons::-webkit-scrollbar-track {
        background-color: #ddd;
        height: 4px;
    }

    .header-buttons::-webkit-scrollbar-thumb {
        height: 0.37rem;
        background-color: #ccc;
        border-radius: 2.5rem;
    }

    .header-buttons::-webkit-scrollbar {
        width: 6.25rem;
        height: 0.62rem;
    }

    .header-buttons .header-button {
        margin-right: 1.56rem;
    }

    .header-buttons .header-button button {
        width: 9.812rem;
        height: 3.18rem;
        background-color: var(--color-background-white);
        border-radius: 0.62rem;
        font: 700 1rem Roboto;
        text-transform: uppercase;
        cursor: pointer;

        @media(min-width: 1100px) {
            width: 15.5rem;
        }
    }

    .header-buttons .header-button:nth-child(1) button {
        background-color: var(--color-background-yellow);

        @media(min-width: 1100px) {
            width: 9.18rem;
        }
    }

    .header-buttons .header-button:last-of-type button {
        margin-right: 1.56rem;
    }
`;

