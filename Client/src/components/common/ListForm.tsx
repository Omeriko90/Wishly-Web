import { Box, Button, Theme, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import List from "src/types/list";
import FormTextInput from "src/components/common/Form/FormTextInput";
import FormDateInput from "src/components/common/Form/FormDateInput";
import dayjs from "dayjs";

interface ListFormProps {
  defaultValues?: List;
  onSubmit: (data: List) => void;
  onCancel?: () => void;
  cancelBtnLabel?: string;
  saveBtnLabel?: string;
  formTitle: string;
}

const initialValues: Partial<List> = {
  title: "Gift List",
  description: "This is a list of gifts",
  date: dayjs(new Date()),
};

function ListForm(props: ListFormProps) {
  const {
    defaultValues,
    onSubmit,
    onCancel,
    cancelBtnLabel,
    saveBtnLabel,
    formTitle,
  } = props;
  const { control, handleSubmit } = useForm<List>({
    defaultValues: defaultValues
      ? {
          title: defaultValues?.title,
          description: defaultValues?.description,
          date: dayjs(defaultValues?.date),
        }
      : initialValues,
  });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <form
        style={{
          width: "100%",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            {onCancel && (
              <Button
                size="large"
                variant="text"
                onClick={onCancel}
                sx={{
                  marginInlineEnd: 1,
                  color: "#7a7a7a",
                  "&:hover": {
                    color: "#7a7a7a",
                    backgroundColor: "#c3c3c33b",
                  },
                }}
              >
                {cancelBtnLabel || "Cancel"}
              </Button>
            )}
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
            >
              {saveBtnLabel || "Save"}
            </Button>
          </Box>
          <Typography
            variant="h2"
            sx={{
              marginBottom: (theme: Theme) =>
                theme.breakpoints.down("lg") ? 2 : 1,
            }}
          >
            {formTitle}
          </Typography>
        </Box>
        <Box>
          <FormTextInput
            control={control}
            fullWidth
            name="title"
            required
            label="Title"
            sx={{ marginBottom: 2 }}
          />
          <FormTextInput
            control={control}
            name="description"
            required
            fullWidth
            label="Description"
            sx={{ marginBottom: 2 }}
          />
          <FormDateInput control={control} name="date" fullWidth required />
        </Box>
      </form>
    </Box>
  );
}

export default ListForm;
