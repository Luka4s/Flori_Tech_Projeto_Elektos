import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { Layout } from "./layout/layout";
import { HelpPage } from "./pages/help";
import { MyDataPage } from "./pages/myInformations";
import { EditMyInformation } from "./pages/editMyInformations";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/ajuda",
    element: (
      <Layout>
        <HelpPage />
      </Layout>
    ),
  },
  {
    path: "/meus-dados",
    element: (
      <Layout>
        <MyDataPage />
      </Layout>
    ),
  },
  {
    path: "/editar",
    element: (
      <Layout>
        <EditMyInformation />
      </Layout>
    ),
  },
]);
