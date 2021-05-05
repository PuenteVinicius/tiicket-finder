import  { useState } from "react";
import { Box, Main, Heading, Paragraph } from "grommet";
import ArtistInput from "./ArtistInput/ArtistInput";
import TicketMasterApi from "../../api/ticket-master/ticket-master";
import IAtraction from "../../models/atraction";

const Home = () => {
  const [artistState, setArtistState] = useState({});

  const setArtist = async (keyword: string) => {
    let artist: IAtraction = await TicketMasterApi.getArtist(keyword);
    if (artist) {
      setArtistState(artist);
    }
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
          <ArtistInput callback={setArtist} />
        </Box>
      </Main>
    </Box>
  );
};

export default Home;
