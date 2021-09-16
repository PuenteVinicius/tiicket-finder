import { Box, Grid, Heading, Text, Button } from "grommet";
import IArtist from "../../../models/artist";
import { IAtractionClassifications } from "../../../models/atraction";

const Artist = (props: IArtist) => {
  let highlightImage: string = "";
  const { artist } = props;

  if (artist.images) {
    highlightImage = `url(${artist.images[0].url})`;
  }

  const showGenreSubgenre = (
    classifications: IAtractionClassifications[] | undefined
  ) => {
    if (!classifications) return;
    return classifications.map((classification: IAtractionClassifications) => (
      <Text
        alignSelf="start"
        margin="medium"
        color="white"
        weight="bold"
        size="xxlarge"
      >
        {classification.genre.name} / {classification.subGenre.name}
      </Text>
    ));
  };


  const showExeternalLinks = (
    externalLinks: any | undefined
  ) => {
    if (!externalLinks) return;
    return Object.keys(externalLinks).map((key: string, index: number) => 
      <Button
        key={key}
        margin="xsmall"
        href={externalLinks[key][0].url}
        primary
        label={key}
      />
    )};

  return (
    <Grid
      rows={["small", "small", "small", "small", "small", "small"]}
      columns={["small", "small", "small", "small", "small", "small"]}
      areas={[
        { name: "info", start: [0, 0], end: [3, 1] },
        { name: "highlight", start: [4, 0], end: [5, 1] },
      ]}
      gap="small"
    >
      <Box gridArea="highlight" background={highlightImage} />
      <Box gridArea="info" background="black">
        <Heading
          margin="medium"
          color="white"
          level="1"
          size="large"
          alignSelf="start"
        >
          {artist.name}
        </Heading>
        {showGenreSubgenre(artist.classifications)}
        <Text
          alignSelf="start"
          margin="medium"
          color="white"
          weight="bold"
          size="xxlarge"
        >
        {showExeternalLinks(artist.externalLinks)}
        </Text>
      </Box>
    </Grid>
  );
};

export default Artist;
