import styled from 'styled-components';

export const DiscoverContainer = styled.div<{bgContainer: string}> `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.bgContainer)};
    margin: 0 2rem 2.8rem 2rem;
    padding: 1.25rem 2.43rem;
    border-radius: 0.62rem;

    h3 {
        font: 700 1.37rem Roboto;
        color: var(--color-text-black);
        margin-bottom: 2.93rem;
    }

    a {
        background-color: #EE797E;
        width: 7.68rem;
        height: 3.31rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font: 700 1rem Roboto;
        color: var(--color-text-white);
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0.625rem;
    }
`;