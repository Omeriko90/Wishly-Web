import "src/App.css";
import AppHeader from "src/components/AppHeader";
import { Container } from "@mui/material";
import { useQueryClient } from "react-query";
import { useEffect } from "react";
import AppRoutes from "src/routes/Routes";

function App() {
  const queryClient = useQueryClient();
  const handleWindowSizeChange = () => {
    queryClient.setQueryData("isMobile", window.innerWidth <= 768);
  };
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <AppHeader />
      <Container
        maxWidth="md"
        sx={{
          paddingTop: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
