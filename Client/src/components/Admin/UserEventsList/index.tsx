import { Add } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useGetUserLists from "src/hooks/useGetUserLists";
import { default as ListType } from "src/types/list";
import UserEventCard from "./UserEventCard";
import { useHistory } from "react-router-dom";

function UserEventsList() {
  const { data: lists } = useGetUserLists();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddClick = () => {
    history.push("/admin/list/add");
  };

  const userLists = search
    ? lists?.filter((list: ListType) => list.title.includes(search))
    : lists;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h1" color="#2C404F">
          Your lists
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search..."
          size="small"
          value={search}
          onChange={handleSearch}
        />
        <Button
          variant="contained"
          size="medium"
          onClick={handleAddClick}
          sx={{
            marginInlineStart: 2,
            paddingBlock: "8px",
            backgroundColor: "#71A1B9",
          }}
          startIcon={<Add />}
        >
          Add
        </Button>
      </Box>
      <Grid container>
        {userLists?.map((list: ListType) => (
          <Grid item key={list._id}>
            <UserEventCard listId={list._id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UserEventsList;
