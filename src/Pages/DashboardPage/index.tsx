import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import React from "react";
import rocket from "../../animation/space-tour.json";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const DashboardPage: React.FC = () => {
  const navigation = useNavigation();
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
        <Button onPress={() => navigation.navigate("Mission")}>Entrar</Button>
      </Content>
    </Container>
  );
};

export default DashboardPage;
