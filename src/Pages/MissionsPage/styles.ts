import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background: #f4f4f4;
`;

export const TitlePage = styled.Text`
  font-size: 12px;
  color: #ccc;
  margin-top: 30px;
  font-weight: bold;
  text-align: center;
`;

export const Card = styled.View`
  background-color: #fbfbfb;
  border: 1px solid #fbfbfb;
  border-radius: 10px;
  padding: 25px 5px;
  margin: 50px auto 0 auto;
  width: 90%;
`;

export const TitleName = styled.Text`
  color: #000;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`;

export const DateArticle = styled.Text`
  color: #b0b2b3;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
`;

export const DescriptionMission = styled.Text`
  text-align: center;
  font-size: 18px;
`;

export const ContainerError = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentError = styled.View`
  position: absolute;
  bottom: 0;
  margin-bottom: 5%;
  width: 100%;
  padding: 0px 30px;
`;
