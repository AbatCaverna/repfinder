import styled from 'styled-components';

import {COLORS} from '../../globalStyles';

export const Container = styled.div`
    height: 100vh;
    width: 100v;
    padding: 2rem;
    display:flex;
    flex-direction: column;
`
export const Header = styled.div`
    color: ${COLORS.clr_red};
    font-weight: 500;
    font-size: 64px;
    padding-bottom: 2rem;
    cursor: pointer;
    width: 100%;
    text-align: center;
`

export const CardContainer = styled.div`
    margin: 0 auto; 
`

export const ContainerImg = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -100;

    svg {
        width: 100%;
    }

    @media screen and (min-width:500px) {
        svg {
            width: 90%;
        }
    }

    @media screen and (min-width:960px) {
        svg {
            width: 95%;
        }
    }
`;

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    Input {
        margin-bottom: 1rem;
    }

    Button {
        margin-top: 2rem;
        background-color: ${COLORS.clr_red};
        color: #fff;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }

    
`

export const UnderlineLabel = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    align-self: flex-end;
    color: #92140C;
    cursor: pointer;
`