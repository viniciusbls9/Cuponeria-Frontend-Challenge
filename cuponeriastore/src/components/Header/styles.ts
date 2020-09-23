import styled from 'styled-components';

export const Menu = styled.header`
    background-color: var(--color-background-header);
    height: 15.37rem;

    .header {
        display: flex;
        align-items: center;
        color: var(--color-text-white);
        padding-top: 1.87rem;
    }

    .header img {
        margin-right: 1.25rem;
        margin-left: 1.87rem;
    }

    .header h1 {
        font: 700 1.87rem Roboto;
        text-transform: uppercase;
    }

    .header-buttons {
        padding: 4.3rem 0 1.45rem 0;
        padding-left: 1.87rem;
        overflow-x: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
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
    }

    .header-buttons .header-button:nth-child(1) button {
        background-color: var(--color-background-yellow);
    }

    .header-buttons .header-button:last-of-type button {
        margin-right: 1.56rem;
    }
`;

