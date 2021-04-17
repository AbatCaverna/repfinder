import styled from 'styled-components';

export const CardItem = styled.div<any>`
    background-color: ${props => props.bgColor || '#fff'};
    min-height: 500px;
    min-width: 300px;
    width: 400px;
    border-radius: 8px;

    @media screen and (max-width: 450px) {
        width: 320px;
    }
`;