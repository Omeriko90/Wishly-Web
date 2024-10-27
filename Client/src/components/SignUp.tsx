import { Box, Button, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import FormTextInput from "src/components/common/Form/FormTextInput";

interface FormValues {
  fullName: string;
  email: string;
  password: string;
}

const emailRegex = new RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
);

const Signup = () => {
  const { control, handleSubmit, setError } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    if (!emailRegex.test(values.email)) {
      return setError("email", { type: "custom", message: "Invalid Email" });
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
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput
            label="Full Name"
            fullWidth
            name="fullName"
            sx={{ marginBottom: 2 }}
            control={control}
          />
          <FormTextInput
            label="Email"
            name="email"
            required
            sx={{ marginBottom: 2 }}
            control={control}
            fullWidth
          />
          <FormTextInput
            label="Password"
            sx={{ marginBottom: 2 }}
            name="password"
            required
            control={control}
            type="password"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ padding: "0.75rem" }}
          >
            Sign Up
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: "#ff4081" }}>
            Login
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
