import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Approute from "./App/routes/Approute.jsx";
import { store } from "./App/Store.jsx";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  MyContextProvider,
  MyStore,
} from "./features/Products/Hooks/useContext.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <MyContextProvider>
        <Approute />
      </MyContextProvider>
    </QueryClientProvider>
  </Provider>
);
