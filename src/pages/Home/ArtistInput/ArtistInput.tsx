import React, { useState } from "react";
import { TextInput } from "grommet";

const ArtistInput = ({ callback }: any) => {
  
  const [artistNameState, setArtistNameState] = useState({ artistName: "" })

  const artistNameChangeHandler = (event: any) => {
    const changedArtistName: string = event.target.value
    setArtistNameState({ artistName: changedArtistName })
    callback(artistNameState.artistName)
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
