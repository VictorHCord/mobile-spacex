import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

export const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Recipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

export const Title = styled.Text`
  color: #fff;
`
export const TitleMission = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`

export const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`

export const RecipeContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: -16px;
  padding: 20px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

export const DescriptionMission = styled.Text`
  font-size: 18px;
  justify-content: center;
  line-height: 28px;
`

export const ButtonArticle = styled(RectButton)`
  height: 46px;
  margin: 25px 0 0 0px;
  width: 100%;
  background-color: #2b2690;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

export const ButtonLink = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;


export const ButtonVideo = styled.TouchableOpacity`
  height: 46px;
  width: 100%;
  background-color: #7e86a9;
  color: #fff;
  margin-top: 15px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`