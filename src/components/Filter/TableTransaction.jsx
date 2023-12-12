import React from "react";
import DataTable from "react-data-table-component";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./DataTransaction";
import './Transaction.css'

function TableTransaction() {
  const tableData = {
    columns,
    data,
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: "18px",
        color: "orange",
        fontWeight: "bold",
        letterSpacing: "2px",
      },
    },
  };

  return (
    <div className="main">
      <DataTableExtensions 
      filterPlaceholder={"search"}
      {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          defaultSortField="id"
          sortIcon={<ArrowDownwardOutlinedIcon />}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          customStyles={customStyles}
        />
      </DataTableExtensions>
    </div>
  );
}

export default TableTransaction;
