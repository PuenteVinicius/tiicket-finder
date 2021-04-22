import React from "react";
import { Box, Main, Heading, Paragraph } from "grommet";
import ArtistInput from "./ArtistInput/ArtistInput";
import { FeatureTogglesContext } from "../../FeatureTogglesContext";

function Home() {
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
          <FeatureTogglesContext.Consumer>
            {({ searchArtist }: any) =>
              searchArtist === "true" ? <ArtistInput /> : null
            }
          </FeatureTogglesContext.Consumer>
        </Box>
      </Main>
    </Box>
  );
}

export default Home;
