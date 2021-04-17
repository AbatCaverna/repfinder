import React from 'react';

import { Container } from './styles';

const Button: React.FC<any> = ({children, onClick}) => {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Button;