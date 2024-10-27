import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useGetWish from "src/hooks/useGetWish";
import WishSelectForm from "./WishSelectForm";
import IconButton from "src/components/common/IconButton";
import useIsMobile from "src/hooks/useIsMobile";
interface WishDetailsDialogProps {
  onClose: () => void;
  wishId: string;
  withUserSelection?: boolean;
}

function WishDetailsDialog(props: WishDetailsDialogProps) {
  const { onClose, wishId, withUserSelection } = props;
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const wish = useGetWish(wishId);

  const handleSelectWishClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Dialog
      maxWidth="md"
      fullScreen={isMobile}
      fullWidth
      open
      onClose={onClose}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle>Wish Details</DialogTitle>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: 5 }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginInlineEnd: 1 }}>
              Name:
            </Typography>
            <Typography variant="body2">{wish?.title}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginInlineEnd: 1 }}>
              Description:
            </Typography>
            <Typography variant="body2">{wish?.description}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginInlineEnd: 1 }}>
              Link:
            </Typography>
            <a href={wish?.url} target="_blank">
              Link to gift
            </a>
          </Box>
        </Box>
        {withUserSelection && (
          <>
            <Box
              sx={{
                marginBlock: 2,
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={handleSelectWishClick}
              >
                Select Wish
              </Button>
            </Box>
            <Collapse
              in={isOpen}
              timeout="auto"
              sx={{
                borderTop: ({ palette }: Theme) =>
                  `1px solid ${palette.divider}`,
              }}
              unmountOnExit
            >
              <Box>
                <WishSelectForm wishId={wish?._id || ""} onClose={onClose} />
              </Box>
            </Collapse>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default WishDetailsDialog;
