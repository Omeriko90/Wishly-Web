import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import useGetList from "src/hooks/useGetList";
import "src/components/Admin/UserEventsList/index.css";
import { useHistory } from "react-router-dom";
interface UserEventCardProps {
  listId: string;
}

function UserEventCard(props: UserEventCardProps) {
  const { listId } = props;
  const history = useHistory();
  const { data: list } = useGetList(listId);
  const { title, description } = list || {};

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    history.push(`/admin/list/${listId}/edit`);
  };

  const handleViewClick = () => history.push(`/admin/list/${listId}`);

  return (
    <Card raised id={"card"} onClick={handleViewClick}>
      <CardContent className="card-content">
        <Box className="text-container">
          <Typography variant="body1" fontWeight={600}>
            Event Name
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            {title}
          </Typography>
        </Box>
        <Box className="text-container">
          <Typography variant="body1" fontWeight={600}>
            Event Description
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#71A1B9",
          }}
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserEventCard;
