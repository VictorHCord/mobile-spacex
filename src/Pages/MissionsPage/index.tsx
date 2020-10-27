import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import moment from "moment";
import React from "react";
import { ScrollView } from "react-native";
import SpaceError from "../../animation/space-error.json";
import Button from "../../components/Button";
import {
  Card,
  Container,
  ContainerError,
  ContentError,
  DateArticle,
  DescriptionMission,

  TitleName, TitlePage
} from "./styles";

interface MissionInitial {
  mission_name: string;
  launch_date_local: string;
  id: string;
  launch_site: {
    site_name_long: string;
  };
  ships: {
    image: string;
  };
}

interface MissionsInfo {
  launchesPast: Array<MissionInitial>;
}
const QUERY_MISSIONS_LAUNCHES_PAST = gql`
  query launchesPast {
    launchesPast {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

const MissionsPage: React.FC = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery<MissionsInfo>(
    QUERY_MISSIONS_LAUNCHES_PAST
  );

  if (loading)
    return (
      <Container>
        <p> ...loading</p>
      </Container>
    );

  if (error)
    return (
      <ContainerError>
        <Lottie
          autoSize
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          source={SpaceError}
          autoPlay
          loop
        />
        <ContentError>
          <Button onPress={() => navigation.navigate("Dashboard")}>
            Entrar
          </Button>
        </ContentError>
      </ContainerError>
    );
  return (
    <ScrollView>
      <Container>
        <TitlePage> Missions </TitlePage>

        {data?.launchesPast.map(
          ({ id, mission_name, launch_site, launch_date_local }) => (
            <Card key={id}>
              <TitleName> {mission_name} </TitleName>
              <DateArticle>
                {moment(launch_date_local).format("DD/MM/YYYY HH:mm")}
              </DateArticle>
              <DescriptionMission>
                {launch_site.site_name_long}
              </DescriptionMission>
            </Card>
          )
        )}
      </Container>
    </ScrollView>
  );
};

export default MissionsPage;
