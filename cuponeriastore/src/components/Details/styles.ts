import styled from 'styled-components';

export const DiscoverContainer = styled.div`

    @media(min-width: 1100px) {
        display: flex;
    }

    .discover-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 2rem 2.8rem 2rem;
        padding: 1.25rem 2.43rem;
        border-radius: 0.62rem;
        box-shadow: 0px 2px 12px var(--color-shadow);

        img {
            width: 13.5625rem;

            @media(min-width: 1100px) {
                width: 20rem;
            }
        }

        @media(min-width: 1100px) {
            margin: 0 2rem 1.8rem 2rem;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 3fr 0fr;
        }

        .discover-title {
            display: flex;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            margin-left: 0;
            @media(min-width: 1100px) {
                margin-left: 3.43rem;
                flex-direction: row;
                justify-content: space-between;
            }
        }

        .discover-title h3 {
            font: 700 1.87rem Roboto;
            color: var(--color-text-black);
            text-align: center;
            
            @media(min-width: 1100px) {
                text-align: left;
                margin-bottom: 0;
                order: 3;
            }
        }
    
        a {
            background-color: #EE797E;
            width: 15.6875rem;
            height: 3.31rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font: 700 1rem Roboto;
            color: var(--color-text-white);
            text-decoration: none;
            text-transform: uppercase;
            border-radius: 0.625rem;
            margin: 2rem 0 2rem 0;

            @media(min-width: 1100px) {
                order: 5;
            }
        }
    
        p {
            font: 500 1.25rem Roboto;
            color: var(--color-text-paragraph);
    
            @media(min-width: 1100px) {
                grid-template-columns: 1fr 1fr;
                grid-column: 2;
                margin-top: 1.1rem;
                order: 5;
            }
        }

    }

`;

export const DiscoverContent = styled.div<{ bgContainer: string }> `
    background-color: ${props => (props.bgContainer)};

`;