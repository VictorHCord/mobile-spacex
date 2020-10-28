import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Linking, SafeAreaView, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Detail from '../../assets/images/details.png'
import {
  Back,
  ButtonArticle,

  ButtonLink, ButtonVideo,

  Container,
  DescriptionMission,
  Divider,
  MenuBar,
  Recipe,
  RecipeBackground,
  RecipeContainer,
  Title,
  TitleMission
} from './styles'

interface ParamsRoutes {
  route: any
}
interface LaunchInitial {
  mission_name: string
  id: string
  details: string
  links: {
    article_link: string
    video_link: string
  }
  ships: [
    {
      image: string
    }
  ]
}

interface LaunchId {
  id: string
}

// Definindo ele como array para fazer o map dentro dele
interface LaunchInfo {
  launch: LaunchInitial
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
`

const DetailsMissionPage: React.FC<ParamsRoutes> = ({ route }) => {
  const { itemId } = route.params

  const { data } = useQuery<LaunchInfo, LaunchId>(GET_MISSION, {
    variables: {
      id: itemId,
    },
  })




  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle="light-content" />
        <RecipeBackground source={Detail}>
          <SafeAreaView>
            <MenuBar>
              <Back>
                <Title> Detalhes da missão </Title>
              </Back>
            </MenuBar>
            <Recipe>
              <TitleMission numberOfLines={1}>{data?.launch.mission_name}</TitleMission>
              <Divider />
            </Recipe>
            <RecipeContainer>
              <DescriptionMission numberOfLines={8}>{data?.launch.details}</DescriptionMission>
              {data?.launch.links.article_link !== null && (
                <>
                  <ButtonArticle>
                    <ButtonLink onPress={() => Linking.openURL(`${data?.launch.links.article_link}`)}>Artigo</ButtonLink>
                  </ButtonArticle>
                </>
              )}

              {data?.launch.links.video_link !== null && (
                <ButtonVideo>
                  <ButtonLink onPress={() => Linking.openURL(`${data?.launch.links.video_link}`)}>Videos</ButtonLink>
                </ButtonVideo>
              )}

            </RecipeContainer>
          </SafeAreaView>
        </RecipeBackground>
      </Container>
    </ScrollView>
  )
}

export default DetailsMissionPage
