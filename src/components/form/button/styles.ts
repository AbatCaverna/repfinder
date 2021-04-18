import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 50px;
  height: 65px;
  width: 200px;
  border: none;
  cursor: pointer;
  transform: scale(.9);
  
  &:focus {
    outline: inherit;
  }

  &:active {
    opacity: 0.7;
  }

  &:hover {
    transform: scale(1);
  }
`;
