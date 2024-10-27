import { Box, Button, Typography, Paper } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import FormTextInput from "./common/Form/FormTextInput";

interface FormValues extends FieldValues {
  email: string;
  password: string;
}

const emailRegex = new RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
);

const Login = () => {
  const { control, handleSubmit, setError } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    if (!emailRegex.test(values.email)) {
      setError("email", { type: "custom", message: "Invalid Email" });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: "2rem", width: "400px", borderRadius: 2 }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <FormTextInput
            label="Email"
            required
            control={control}
            sx={{ marginBottom: 2 }}
            name="email"
            fullWidth
          />
          <FormTextInput
            label="Password"
            required
            sx={{ marginBottom: 2 }}
            type="password"
            control={control}
            name="password"
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            sx={{ padding: "0.75rem" }}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#ff4081" }}>
            Sign Up
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
