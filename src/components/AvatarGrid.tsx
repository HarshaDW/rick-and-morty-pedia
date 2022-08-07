import Grid from "@mui/material/Grid";
import AvatarCard from "./AvatarCard";
import { ICharacter } from "../app/@types/characters";

type Props = {
  characters: {
    results: ICharacter[];
  };
};

const AvatarGrid = (props: Props) => {
  const { results: characters } = props.characters;
  console.log("characters", characters);
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12, lg: 20 }}>
      {characters.map((character: any, index: number) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <AvatarCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AvatarGrid;
