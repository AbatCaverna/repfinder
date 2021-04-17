import React from 'react';

import { ReactComponent as HouseImg } from '../../assets/undraw_house_searching_n8mp 1.svg';

import { Container, ContainerImg, LoginForm, UnderlineLabel, CardContainer, Header } from './styles';

//components
import Card from '../../components/card'
import CardHeader from '../../components/card/card-header'
import CardContent from '../../components/card/card-content'
import Input from '../../components/form/input';
import Button from '../../components/form/button';

const Login: React.FC = () => {
  
    return (
  <Container>
      <Header>
          RepFinder
      </Header>
      <CardContainer>
        <Card bgColor={`rgba(30, 30, 36, 0.75)`} width={10} height={10}>
            <CardHeader>LOGIN</CardHeader>
            <CardContent>
              <LoginForm>
                <Input type={'text'} placeholder={'E-mail'}/>
                <Input type={'password'} placeholder={'Senha'}/>
                <UnderlineLabel>Esqueci minha senha</UnderlineLabel>
                <Button>Entrar</Button>
                <UnderlineLabel style={{marginTop: '80px'}}>Cadastrar-se</UnderlineLabel>
              </LoginForm> 
            </CardContent>
        </Card>
      </CardContainer>
      <ContainerImg>
        <HouseImg/>
      </ContainerImg>
  </Container>);
}

export default Login;