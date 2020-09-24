import styled from 'styled-components';

export const FeaturedContainer = styled.div `
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    &::-webkit-scrollbar-track {
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #ddd;
        height: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 0.37rem;
        background-color: var(--color-background-red);
        border-radius: 2.5rem;
    }

    &::-webkit-scrollbar {
        height: 0.62rem;
    }

    .card-container {
        box-shadow: 0 2px 12px var(--color-shadow);
        width: 100%;
        background-color: #fff;
        margin-right: 1.7rem;
        margin-bottom: 1.7rem;
        max-width: 15.75rem;
    }

    .card-container:first-of-type {
        margin-left: 1.9rem;
    }

    .card-container:last-of-type {
        margin-right: 1.7rem;
    }

    .card-white {
        background-color: var(--color-background-white);
        cursor: pointer;
        padding: 10px;
        height: 315px;
        overflow: hidden;
    }

    .card-white img {
        width: 256px;
        height: 300px;
        max-width: 100%;

    }

    .badge-price {
        display: flex;
        justify-content: flex-end;
        margin-top: -2.8rem;
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
        min-height: 3.18rem;
        padding: 0 0.8rem 0 0.8rem;
        background-color: var(--color-background-black);
        border-radius: 0 0 0.6rem 0.6rem;
        text-align: center;

    }

    .card-black p {
        color: var(--color-text-white);
        font: 700 1rem Roboto;
        width: 270px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

`;