import { RouterProvider } from "react-router";
import "./index.css";
import { routes } from "./routes";
export function App() {
  return <RouterProvider router={routes} />;
}
