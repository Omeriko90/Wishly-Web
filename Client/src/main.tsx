import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store.ts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactQueryDevtools } from "react-query/devtools";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const queryClient = new QueryClient();
const theme = createTheme();
const history = createBrowserHistory({ basename: "/" });

createRoot(document.getElementById("root")!).render(
  <Router history={history}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </Router>
);
