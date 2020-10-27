import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ImageBackground, Text } from "react-native";
import details from "../../assets/images/details.png";

// import { Container } from './styles';

interface ParamsRoutes {
  route: any;
}
interface LaunchInitial {
  mission_name: string;
  id: string;
  details: string;
  links: {
    article_link: string;
    video_link: string;
  };
  ships: [
    {
      image: string;
    }
  ];
}

interface LaunchId {
  id: string;
}

// Definindo ele como array para fazer o map dentro dele
interface LaunchInfo {
  launch: LaunchInitial;
}
const GET_MISSION = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      details
      mission_name
      links {
        article_link
        video_link
      }
      ships {
        id
        image
      }
    }
  }
`;

const DetailsMissionPage: React.FC<ParamsRoutes> = ({ route }) => {
  const { itemId } = route.params;

  const { data } = useQuery<LaunchInfo, LaunchId>(GET_MISSION, {
    variables: {
      id: itemId,
    },
  });

  return (
    <ImageBackground
      source={details}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <Text> test </Text>
    </ImageBackground>
  );
};

export default DetailsMissionPage;
