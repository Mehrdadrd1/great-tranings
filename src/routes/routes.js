import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { TablePage } from "../pages/tablePage/TablePage";
import EditorPage from "../pages/editorPage/EditorPage";
import DropDownPage from "../pages/dropDownPage/DropDownPage";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tablePage", element: <TablePage /> },
  { path: "/editorPage", element: <EditorPage /> },
  { path: "/dropDownPage", element: <DropDownPage /> },
]);

export default routes;
