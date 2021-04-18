import styled, {keyframes} from 'styled-components';

const Colors = {
    error: '#BA3B46',
    default: '#E0E1E9',
    success: '#61C9A8'
}

const open = keyframes`
    from { 
        bottom: 10px;
    } 
    
    to { 
        bottom: 30px;
    }
`

export const Container = styled.div<any>`
  position: absolute;
  left: 50%;
  right: 50%;
  width: 300px;
  height: 75px;
  padding: 1rem;
  background-color: ${props => Object.keys(Colors).filter(v => v  === props.color)};
  animation: ${open} 1s ease-in-out;
`;
