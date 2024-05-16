import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { useState } from "react";
import CustomButtonComponent from "../customButtonComponent/CustomButtonComponent";
import "./style.css";

const AgGridTable = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mazda", model: "", price: 0, electric: null },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      headerName: "Make & Model",
      valueGetter: (p) => p.data.make + " " + p.data.model,
    },
    { field: "make", flex: 2, filter: true, floatingFilter: true },
    {
      field: "model",
      filter: true,
      flex: 1,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Model Y", "F-Series", "Corolla"],
      },
    },
    {
      field: "price",
      flex: 1,

      valueFormatter: (p) => "£" + p.value.toLocaleString(),
      checkboxSelection: true,
    },
    {
      field: "electric",
      flex: 1,
      editable: true,
      cellClassRules: {
        // apply green to electric cars
        "rag-green": (params) => params.value === true,
      },
    },
    { field: "action", flex: 1, cellRenderer: CustomButtonComponent },
  ]);

  const rowSelection = "multiple";
  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];

  const rowClassRules = {
    // apply red to Ford cars
    "rag-red": (params) => params.data.make === "Ford",
  };

  return (
    <div
      className="ag-theme-quartz-dark" // applying the grid theme
      style={{ height: 500, width: 800 }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection={rowSelection}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        rowClassRules={rowClassRules}
      />
    </div>
  );
};

export default AgGridTable;
