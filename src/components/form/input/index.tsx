import React from 'react';

import { Container } from './styles';

interface InputProps {
    type: string;
    placeholder: string;
    onChange?: any;
}
const Input: React.FC<InputProps> = ({type, placeholder, onChange}) => {
  return <Container type={type} placeholder={placeholder} onChange={onChange}></Container>;
}

export default Input;