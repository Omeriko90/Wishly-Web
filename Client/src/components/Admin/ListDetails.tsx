import { Box, Button, TextField, Typography } from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import useGetList from "src/hooks/useGetList";
import { ArrowBack, CalendarMonth, Edit } from "@mui/icons-material";
import { useState } from "react";
import WishList from "src/components/WishList";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "src/components/common/IconButton";
import dayjs from "dayjs";

function ListDetails() {
  const { pathname } = useLocation();
  const history = useHistory();
  const id = pathname.split("/")[3];
  const { data: list, isLoading } = useGetList(id);
  const [search, setSearch] = useState("");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!list) {
    return <h1>List not found</h1>;
  }

  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  const handleClearClick = () => setSearch("");
  const handleBackClick = () => history.goBack();
  const handleEditClick = () => history.push(`/admin/list/${id}/edit`);
  return (
    <Box sx={{ width: "850px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={handleBackClick}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <IconButton>
            <ArrowBack sx={{ width: 24, height: 24, color: "#333" }} />
          </IconButton>
          <Typography variant="h6" color="#333">
            Back to lists
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditClick}
            startIcon={<Edit />}
          >
            Edit
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="h1" sx={{ marginBottom: 2 }}>
          {list.title}
        </Typography>
        <Box>
          <Typography variant="h6">{list.description}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CalendarMonth sx={{ marginInlineEnd: 1 }} />
            <Typography variant="h6">
              {dayjs(list.date).format("DD/MM/YYYY HH:mm") ||
                "No Date selected"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          Wishes
        </Typography>
        <Box
          sx={{
            marginBottom: 2,
            paddingInlineEnd: "58px",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClearClick}
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  <ClearIcon sx={{ width: 20, height: 20 }} />
                </IconButton>
              ),
            }}
            value={search}
            placeholder="Search..."
            onChange={handleSearch}
          />
        </Box>
        <WishList listId={id} filterValue={search} />
      </Box>
    </Box>
  );
}

export default ListDetails;
