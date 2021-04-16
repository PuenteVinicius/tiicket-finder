import React from "react";
import { Box, Main, Heading, Paragraph } from "grommet";

function Home() {
  return (
    <Box
      direction="row"
      pad="xlarge"
      align="center"
      alignContent="center"
      alignSelf="center"
    >
      <Main pad="large">
        <Heading alignSelf="center">Busque por uma banda ou artista</Heading>
        <Paragraph alignSelf="center">
          Iremos mostrar ingressos e videos do seu artista preferido :)
        </Paragraph>
      </Main>
    </Box>
  );
}

export default Home;
