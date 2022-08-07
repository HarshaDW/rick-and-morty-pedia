import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Grid from "@mui/material/Grid";
import AvatarDialog from "./AvatarDialog";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxHeight: theme.spacing(100),
}));

const AvatarCard = ({ character }: any) => {
  const [open, setOpen] = useState(false);
  const handleExpandClick = e => {
    e.preventDefault();
    setOpen(!open);
  };

  const { name, image, status, species, gender } = character;

  return (
    <StyledCard>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleExpandClick}>
            <MoreVertIcon />
            <AvatarDialog open={open} setOpen={setOpen} character={character} />
          </IconButton>
        }
        title={
          <Typography variant="h6" color="text.secondary">
            {name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        // height="194"
        image={image}
        alt={name}
      />
      <CardContent>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4, lg: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Gender
            </Typography>
            <Typography variant="body1" color="green">
              {gender}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Species
            </Typography>
            <Typography variant="body1" color="blue">
              {species}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Status
            </Typography>
            <Typography variant="body1" color={status === "Alive" ? "green" : "red"}>
              {status}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default AvatarCard;
