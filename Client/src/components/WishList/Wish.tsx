import { Typography, Card, CardContent, Box } from "@mui/material";
import { default as WishType } from "src/types/wish";
import GiftIcon from "src/components/Icons/GiftIcon";

interface WishProps {
  wish: WishType;
  onClick?: (id: string) => void;
}

function Wish(props: WishProps) {
  const { wish, onClick } = props;
  const { title, _id, imageUrl } = wish;

  return (
    <Card
      onClick={() => onClick?.(_id)}
      sx={{
        width: "100%",
        backgroundColor: ({ palette }) => palette.background.default,
        border: ({ palette }) => `1px solid ${palette.divider}`,
        borderRadius: 3,
        overflow: "initial",
        cursor: "pointer",
        display: "flex",
        height: 170,
        "&:not(:last-child)": {
          marginBottom: 1,
        },
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginBottom: 1 }}>
            {imageUrl ? (
              <img src={imageUrl} />
            ) : (
              <GiftIcon width="80" height="80" />
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginInlineEnd: 1, fontWeight: 500 }}
            >
              Name:
            </Typography>
            <Typography variant="body1">{title}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Wish;
