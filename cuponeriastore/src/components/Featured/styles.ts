import styled from 'styled-components';

export const FeaturedContainer = styled.div `
    display: flex;
    flex-direction: row;
    overflow-x: auto;

    &::-webkit-scrollbar-track {
        background-color: var(--color-background-yellow);
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #ddd;
        height: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 0.37rem;
        background-color: var(--color-background-yellow);
        border-radius: 2.5rem;
    }

    &::-webkit-scrollbar {
        width: 6.25rem;
        height: 0.62rem;
    }

    .card-container {
        box-shadow: 0 2px 12px var(--color-shadow);
        width: 100%;
        background-color: #fff;
        margin-right: 1.7rem;
        margin-bottom: 1.7rem;
    }

    .card-container:first-of-type {
        margin-left: 1.9rem;
    }

    .card-container:last-of-type {
        margin-right: 1.7rem;
    }

    .card-white {
        background-color: var(--color-background-white);
        margin-right: 0.9rem;
    }

    .card-white img {
        padding: 10px;
    }

    .badge-price {
        display: flex;
        justify-content: flex-end;
        margin-top: -1.37rem;
        margin-bottom: 0.6rem;
    }
    
    .card-white span {
        background-color: var(--color-bg-badge);
        font: 700 1rem Roboto;
        color: var(--color-text-white);
        padding: 0.5rem;
        border-radius: 0.6rem;
    }

    .card-black {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3.18rem;
        background-color: var(--color-background-black);
        color: var(--color-text-white);
        border-radius: 0 0 0.6rem 0.6rem;
    }

`;