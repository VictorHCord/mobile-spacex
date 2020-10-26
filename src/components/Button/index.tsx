import React from 'react';
import { ButtonText, Container } from './styles';


const Button: React.FC = ({ children }) => {
  return (
    <Container>
      <ButtonText> {children} </ButtonText>
    </Container>
  )
}

export default Button;