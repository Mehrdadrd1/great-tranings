import { createBrowserRouter } from "react-router-dom";
import AgGridPage from "../pages/agGridPage/AgGridPage";
import DropDownPage from "../pages/dropDownPage/DropDownPage";
import EditorPage from "../pages/editorPage/EditorPage";
import { Home } from "../pages/home/Home";
import { TablePage } from "../pages/tablePage/TablePage";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tablePage", element: <TablePage /> },
  { path: "/editorPage", element: <EditorPage /> },
  { path: "/dropDownPage", element: <DropDownPage /> },
  { path: "/agGridPage", element: <AgGridPage /> },
]);

export default routes;
