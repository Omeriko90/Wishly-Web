import { Box, Theme } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import PublicList from "src/components/Public/PublicList";

function Public() {
  return (
    <Box
      sx={{
        display: "flex",
        width: { md: 850, sm: 600, xs: "100%" },
        alignItems: (theme: Theme) =>
          theme.breakpoints.down("lg") ? "flex-start" : "center",
        height: "100%",
      }}
    >
      <Switch>
        <Route path="/list/:id" component={PublicList} />
      </Switch>
    </Box>
  );
}

export default Public;
