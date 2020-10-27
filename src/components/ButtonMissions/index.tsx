import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { ButtonTextMission, Container } from "./styles";

interface ButtonMissionProps extends RectButtonProperties {
  children: string;
}
const ButtonMissions: React.FC<ButtonMissionProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ButtonTextMission> {children} </ButtonTextMission>
    </Container>
  );
};

export default ButtonMissions;
