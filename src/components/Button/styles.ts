import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
width: 100%;
height: 50px;
border-radius: 10px;
background-color: #e3e1e8;
justify-content: center;
align-items: center;
`;


export const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
`;
