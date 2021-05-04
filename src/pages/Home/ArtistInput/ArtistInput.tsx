import { useEffect, useState } from "react";
import useDebounce from "../../../utils/hooks";
import { TextInput } from "grommet";

const DEBOUNCE_DELAY = 3000;

const ArtistInput = ({ callback }: any) => {
  const [artistNameState, setArtistNameState] = useState("");
  const debouncedSearchTerm = useDebounce(artistNameState, DEBOUNCE_DELAY);

  const artistNameChangeHandler = (event: any) => {
    const changedArtistName: string = event.target.value;
    setArtistNameState(changedArtistName);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      callback(artistNameState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <TextInput
      data-testid="artist-input"
      placeholder="Faça sua busca aqui..."
      onChange={artistNameChangeHandler}
    />
  );
};

export default ArtistInput;
