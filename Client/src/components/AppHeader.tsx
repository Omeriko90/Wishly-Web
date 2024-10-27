import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function AppHeader() {
  return (
    <AppBar
      sx={{
        backgroundColor: "#71A1B9",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" color="#fff">
            Wishly
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
