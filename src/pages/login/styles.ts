import styled from 'styled-components';

import {COLORS} from '../../globalStyles';

export const Container = styled.div`
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    
    header { 
        color: ${COLORS.clr_red};
        font-weight: 500;
        font-size: 96px;
        line-height: 112px;
        padding: 4rem 0 4rem 12rem;
        align-self: flex-start;
        cursor: pointer;
    }

`

export const ContainerImg = styled.div`
    position: absolute;
    bottom: 4rem;
    left: 12rem;
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
    margin-right: 2rem;
    cursor: pointer;
`