import { SxProps, IconButton as MuiIconButton } from "@mui/material";

interface Props {
  children: JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps;
}

function IconButton({ children, onClick, sx = {} }: Props) {
  return (
    <MuiIconButton
      onClick={onClick}
      sx={{
        ...sx,
        "&:focus": {
          outline: "none",
        },
      }}
    >
      {children}
    </MuiIconButton>
  );
}

export default IconButton;
