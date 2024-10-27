import { Box, Button, Typography } from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import WishList from "../WishList";
import useGetList from "src/hooks/useGetList";

function PublicList() {
  const { pathname } = useLocation();
  const history = useHistory();
  const id = pathname.split("/")[3];
  const { data: list } = useGetList(id);

  const handleBack = () => history.goBack();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">{list?.title}</Typography>
      <WishList listId={id} withUserSelection />
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
}

export default PublicList;
