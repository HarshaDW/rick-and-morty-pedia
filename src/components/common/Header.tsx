import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "#2F680D" }} position="sticky">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="div"
          data-testid="header-logo"
          sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
        >
          Rick and Morty Pedia
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
