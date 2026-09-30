import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pagination from "./pagination/Pagination.jsx";
import InfiniteScrolling from "./infiniteScrolling/InfiniteScrolling.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <Pagination /> */}
    <InfiniteScrolling />
  </QueryClientProvider>,
);
