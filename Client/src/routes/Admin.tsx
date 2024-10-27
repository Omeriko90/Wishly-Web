import { Box, Theme } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import AddList from "src/components/Admin/AddList";
import EditList from "src/components/Admin/EditList";
import ListDetails from "src/components/Admin/ListDetails";
import UserEventsList from "src/components/Admin/UserEventsList";

function Admin() {
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
        <Route path="/list/add" component={AddList} />
        <Route path="/list/:id" component={ListDetails} />
        <Route path="/list/:id/edit" component={EditList} />
        <Route path="/lists" component={UserEventsList} />
      </Switch>
    </Box>
  );
}

export default Admin;
