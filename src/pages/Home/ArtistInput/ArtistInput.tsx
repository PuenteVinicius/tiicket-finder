import React, { useState } from "react";
import { TextInput, Box } from "grommet";

const ArtistInput = () => {
  const [artistNameState, setArtistNameState] = useState({ artistName: "" });

  const artistNameChangeHandler = (event: any) => {
    const changedArtistName: string = event.target.value;
    setArtistNameState({ artistName: changedArtistName });
  };

  return (
    <TextInput
      data-testid="artist-input"
      placeholder="Faça sua busca aqui..."
      onChange={artistNameChangeHandler}
    />
  );
};

export default ArtistInput;
