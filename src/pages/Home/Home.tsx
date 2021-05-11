import { useState } from "react";
import { Box, Main, Heading, Paragraph, Spinner } from "grommet";
import ArtistInput from "./ArtistInput/ArtistInput";
import Artist from "./Artist/Artist";
import TicketMasterApi from "../../api/ticket-master/ticket-master";
import IAtraction from "../../models/atraction";
import { FeatureTogglesContext } from "../../FeatureTogglesContext";
import styled from "styled-components";

const ArtistWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row;
  text-align: center;
  justify-content: space-around;
`;

const Home = () => {
  const [atractionState, setAtractiontState] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [showArtist, setShowArtist] = useState(false);

  const setArtist = async (keyword: string) => {
    let atraction: IAtraction | string = await TicketMasterApi.getArtist(
      keyword
    );
    if (atraction) {
      setAtractiontState(atraction);
      setShowArtist(true)
      setLoadingState(false);
    }
  };

  const setLoader = () => {
    setLoadingState(true);
  };

  return (
    <Box
      direction="row"
      pad="large"
      align="center"
      alignContent="center"
      alignSelf="center"
    >
      <Main pad="large">
        <Heading alignSelf="center">Busque por um artista</Heading>
        <Paragraph alignSelf="center">
          Iremos mostrar ingressos e videos do seu artista preferido :)
        </Paragraph>
        <Box
          width="large"
          margin="large"
          alignContent="center"
          alignSelf="center"
          align="center"
        >
          <ArtistInput callback={setArtist} callbackLoader={setLoader} />
        </Box>
        <ArtistWrapper>
          {loadingState ? (
            <Spinner size="medium" color="brand" pad="medium" />
          ) : null}
          <FeatureTogglesContext.Consumer>
            {({ cardArtist }: any) =>
              cardArtist === "true" && showArtist ? <Artist artist={atractionState} /> : null
            }
          </FeatureTogglesContext.Consumer>
        </ArtistWrapper>
      </Main>
    </Box>
  );
};

export default Home;
