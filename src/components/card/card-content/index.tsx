import React from 'react';

import { Container } from './styles';

const CardContent: React.FC = ({children}) => {
  return <Container>{children}</Container>;
}

export default CardContent;