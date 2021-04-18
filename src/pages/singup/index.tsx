import React from 'react'

import { ReactComponent as HouseImg } from '../../assets/undraw_house_searching_n8mp 1.svg';
import { Container, ContainerImg } from './styles';

import Card from '../../components/card';
import CardHeader from '../../components/card/card-header';
import CardContent from '../../components/card/card-content';
import Input from '../../components/form/input';
import Button from '../../components/form/button';

const Register: React.FC = () => {
    return (
        <Container>
            <Card bgColor={'#fff'}>
                <CardHeader>Cadastre-se</CardHeader>
                <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Input type="text" placeholder="Nome"/>
                    <Input type="text" placeholder="E-mail"/>
                    <Input type="password" placeholder="Senha"/>
                    <Input type="password" placeholder="Confirmar senha"/>
                    <Button>Cadastrar</Button>
                </CardContent>
            </Card>
            <ContainerImg>
                <HouseImg/>
            </ContainerImg>
        </Container>
    )
}

export default Register
