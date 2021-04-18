import * as React from 'react'

import { Container } from './styles';

export const AlertContext = React.createContext({} as any);

export function useAlert() {
    return React.useContext(AlertContext)
}

export const AlertProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [message, setMessage] = React.useState('')

    function setAlert(titulo?: string, messagem?:string) {
        setTitle(titulo || '')
        setMessage(messagem || '')
        setIsOpen(!isOpen)

        setTimeout(() => closeAlert() , 1000)
    }

    function closeAlert() {
        setIsOpen(false)
    }
   
    const value: any = {
        isOpen,
        title,
        message,
        setAlert,
        closeAlert
    }

    return (
        <AlertContext.Provider value={value}>
            {children}
            {isOpen && 
            <Container color={'error'}>
                <strong>{title}</strong>
                <p>{message}</p>
            </Container>}
            
        </AlertContext.Provider>
    )
}