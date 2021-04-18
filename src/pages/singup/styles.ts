import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    input {
        margin-bottom: 2rem;
    }

    button {
        background-color: #798086;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        &:active {
            background-color: #E5E5E5;
        }
    }
`;
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