import React from 'react';
import {ReactComponent as NotFoundIcon} from '../../assets/undraw_page_not_found_su7k.svg'

import { Container } from './styles';

const Error: React.FC = () => {
  return (
      <Container>
          <p>Pagina nao encontrada 😓</p>
          <NotFoundIcon/>
      </Container>
  );
}

export default Error;