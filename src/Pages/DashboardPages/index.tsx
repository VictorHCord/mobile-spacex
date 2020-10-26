import Lottie from "lottie-react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import rocket from "../../animation/space-tour.json";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const DashboardPages: React.FC = () => {
  return (
    <Container>
      <Lottie
        autoSize
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
        source={rocket}
        autoPlay
        loop
      />
      <Content>
        <Icon name="log-in" size={30} color="#900" />;
        <Button> Entrar </Button>
      </Content>
    </Container>
  );
};

export default DashboardPages;
