import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

        @media(min-width: 1100px) {
            margin: 0 0 1.8rem 2rem;
            &:last-child {
                margin-right: 2rem;
            }
            width: 50%;
            display: grid;
            grid-template-columns: 1fr 3fr 0fr;
        }

        img {
            width: 256px;
            height: 256px;
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
            font: 700 1.37rem Roboto;
            color: var(--color-text-black);
            margin-bottom: 2.93rem;
            text-align: center;
            
            @media(min-width: 1100px) {
                width: 390px;
                text-align: left;
                margin-bottom: 0;
            }
        }
    
        a {
            // background-color: #ee0;
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
    
        p {
            font: 500 0.8rem Roboto;
            color: var(--color-text-paragraph);
            display: none;
    
            @media(min-width: 1100px) {
                grid-template-columns: 1fr 1fr;
                grid-column: 2;
                display: revert;
                margin-top: 1.1rem;
            }
        }
    }

`;

export const LinkTo = styled(Link)<{ bgColor: string }> `
`;

export const DiscoverContent = styled.div<{ bgContainer: string }> `
    background-color: ${props => (props.bgContainer)};

`;