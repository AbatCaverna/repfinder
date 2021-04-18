import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as HouseImg } from '../../assets/undraw_house_searching_n8mp 1.svg';
import { Container, ContainerImg } from './styles';

import { useAuth } from '../../contexts/authContext';

import Card from '../../components/card';
import CardHeader from '../../components/card/card-header';
import CardContent from '../../components/card/card-content';
import Input from '../../components/form/input';
import Button from '../../components/form/button';

const Register: React.FC = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const history = useHistory()
    const auth = useAuth();
    
    async function hendleButton() {
        if(senha !== confirmaSenha) {
            alert('As senhas precisam ser iguais!')
            return
        }

        if(!nome) {
            alert('Nome eh obrigatorio!')
            return
        }

        if(!email) {
            alert('E-mail eh obrigatorio!')
            return
        }
        
        await auth.singup(email, senha, nome)
            .then(() => {
                alert('Cadastro realizado!')
                history.push('/login')
            })
    }

    return (
        <Container>
            <Card bgColor={'#fff'}>
                <CardHeader>Cadastre-se</CardHeader>
                <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Input type="text" placeholder="Nome" onChange={(ev: any) => setNome(ev.target.value)}/>
                    <Input type="text" placeholder="E-mail" onChange={(ev: any) => setEmail(ev.target.value)} />
                    <Input type="password" placeholder="Senha" onChange={(ev: any) => setSenha(ev.target.value)} />
                    <Input type="password" placeholder="Confirmar senha" onChange={(ev: any) => setConfirmaSenha(ev.target.value)} />
                    <Button onClick={() => hendleButton()}>Cadastrar</Button>
                </CardContent>
            </Card>
            <ContainerImg>
                <HouseImg/>
            </ContainerImg>
        </Container>
    )
}

export default Register
