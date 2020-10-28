import { gql, useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'
import moment from 'moment'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Loading from '../../animation/loading.json'
import SpaceError from '../../animation/space-error.json'
import Button from '../../components/Button'
import {
  ButtonLinked,
  ButtonTextMission,
  Card,
  Container,
  ContainerError,
  ContentError,
  DateArticle,
  DescriptionMission,
  TitleName,
  TitlePage
} from './styles'

interface MissionInitial {
  mission_name: string
  launch_date_local: string
  id: string
  launch_site: {
    site_name_long: string
  }
  ships: {
    image: string
  }
}

interface MissionsInfo {
  launchesPast: Array<MissionInitial>
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
`

const MissionsPage: React.FC = () => {
  const navigation = useNavigation()
  const { data, loading, error } = useQuery<MissionsInfo>(
    QUERY_MISSIONS_LAUNCHES_PAST
  )

  if (loading)
    return (
      <ContainerError>
        <Lottie autoSize source={Loading} autoPlay loop />
      </ContainerError>
    )

  if (error)
    return (
      <ContainerError>
        <Lottie
          autoSize
          style={{ width: '100%', height: '100%', overflow: 'hidden' }}
          source={SpaceError}
          autoPlay
          loop
        />
        <ContentError>
          <Button onPress={() => navigation.navigate('Dashboard')}>
            Retornar
          </Button>
        </ContentError>
      </ContainerError>
    )
  return (
    <ScrollView>
      <Container>
        <TitlePage> Missions </TitlePage>

        {data?.launchesPast.map(
          ({ id, mission_name, launch_site, launch_date_local }) => (
            <Card style={styles.boxShadow} key={id}>
              <TitleName numberOfLines={1}> {mission_name} </TitleName>
              <DateArticle>
                {moment(launch_date_local).format('DD/MM/YYYY HH:mm')}
              </DateArticle>
              <DescriptionMission>
                {launch_site.site_name_long}
              </DescriptionMission>

              <ButtonLinked
                onPress={() => navigation.navigate('Details', { itemId: id })}
              >
                <ButtonTextMission>Verificar</ButtonTextMission>
              </ButtonLinked>
            </Card>
          )
        )}
      </Container>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 1,
  }
})
export default MissionsPage
