import { Box, Grid, Heading, Main, Text, Button } from "grommet";
import React from "react";
import IArtist from "../../../models/artist";
import {
  IAtractionClassifications,
  IAtractionExternalLinks,
} from "../../../models/atraction";

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
    externalLinks: IAtractionExternalLinks | undefined
  ) => {
    if (!externalLinks) return;
    return (
      <Text
        alignSelf="start"
        margin="medium"
        color="white"
        weight="bold"
        size="xxlarge"
      >
        <Button
          margin="xsmall"
          href={externalLinks.facebook[0].url}
          primary
          label="facebook"
        />
        <Button
          margin="xsmall"
          href={externalLinks.homepage[0].url}
          primary
          label="homepage"
        />
        <Button
          margin="xsmall"
          href={externalLinks.instagram[0].url}
          primary
          label="instagram"
        />
        <Button
          margin="xsmall"
          href={externalLinks.twitter[0].url}
          primary
          label="twitter"
        />
        <Button
          margin="xsmall"
          href={externalLinks.youtube[0].url}
          primary
          label="youtube"
        />
      </Text>
    );
  };

  return (
    <Main>
      <Grid 
        rows={["medium", "medium", "medium", "medium", ]}
        columns={["medium", "medium", "medium", "medium"]}
        gap="small"
        areas={[
          { name: "info", start: [0, 0], end: [2, 0] },
          { name: "highlight", start: [3, 0], end: [3, 0] },
          { name: "third", start: [0, 1], end: [2, 1] },
          { name: "fourth", start: [3, 1], end: [3, 1] },
          { name: "teste", start: [0, 2], end: [0, 2] },
          { name: "testb", start: [1, 2], end: [1, 2] },
          { name: "testc", start: [2, 2], end: [2, 2] },
          { name: "testd", start: [3, 2], end: [3, 2] },
          { name: "testeE", start: [0, 3], end: [0, 3] },
          { name: "testf", start: [1, 3], end: [1, 3] },
          { name: "testg", start: [2, 3], end: [2, 3] },
          { name: "testh", start: [3, 3], end: [3, 3] },
        ]}
      >
        <Box gridArea="highlight" background={highlightImage}></Box>
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
          {showExeternalLinks(artist.externalLinks)}
        </Box>
        <Box gridArea="second" background="red" />
        <Box gridArea="third" background="blue" />
        <Box gridArea="fourth" background="green" />
        <Box gridArea="teste" background="blue" />
        <Box gridArea="testb" background="green" />
        <Box gridArea="testc" background="blue" />
        <Box gridArea="testd" background="green" />
        <Box gridArea="testeE" background="blue" />
        <Box gridArea="testf" background="green" />
        <Box gridArea="testg" background="blue" />
        <Box gridArea="testh" background="green" />
      </Grid>
    </Main>
  );
};

export default Artist;
