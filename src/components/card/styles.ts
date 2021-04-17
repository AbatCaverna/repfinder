import styled from 'styled-components';

export const CardItem = styled.div<any>`
background-color: ${props => props.bgColor || '#fff'};
height: 50%;
min-width: 300px;
width: 400px;
align-self: auto;
margin-left: 750px;
border-radius: 8px;
`;