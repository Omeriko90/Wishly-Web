import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Control } from "react-hook-form";
import FormTextInput from "src/components/common/Form/FormTextInput";
import { FormValues } from "./WishesListForm";
import IconButton from "src/components/common/IconButton";
interface WishFormProps {
  index: number;
  onDelete: () => void;
  control: Control<FormValues>;
}

function WishForm(props: WishFormProps) {
  const { onDelete, control, index } = props;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <FormTextInput
        control={control}
        fullWidth
        name={`wishes.${index}.title`}
        required
        label="Title"
        sx={{ marginInlineEnd: 2 }}
      />
      <FormTextInput
        control={control}
        name={`wishes.${index}.description`}
        required
        fullWidth
        label="Description"
        sx={{ marginInlineEnd: 2 }}
      />
      <FormTextInput
        control={control}
        name={`wishes.${index}.url`}
        required
        fullWidth
        label="Url"
        sx={{ marginInlineEnd: 2 }}
      />
      <IconButton onClick={onDelete}>
        <Delete />
      </IconButton>
    </Box>
  );
}

export default WishForm;
