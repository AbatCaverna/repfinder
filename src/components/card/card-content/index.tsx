import React from 'react';

import { Container } from './styles';

const CardContent: React.FC<any> = ({children, style}) => {
  return <Container style={style}>{children}</Container>;
}

export default CardContent;