import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Detail from '../../assets/images/details.png'
import {
  Back,
  ButtonArticle,
  ButtonLink,
  Container,
  DescriptionMission,
  Divider,
  MenuBar,
  Recipe,
  RecipeBackground,
  RecipeContainer,
  Title,
  TitleMission,
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

  console.log(data)

  return (
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
            <TitleMission>{data?.launch.mission_name}</TitleMission>
            <Divider />
          </Recipe>
          <RecipeContainer>
            <DescriptionMission>{data?.launch.details}</DescriptionMission>
            <ButtonArticle>
              <ButtonLink>Artigo</ButtonLink>
            </ButtonArticle>
          </RecipeContainer>
        </SafeAreaView>
      </RecipeBackground>
    </Container>
  )
}

export default DetailsMissionPage
