import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

export default function App(data, handleFormSubmit) {
  const { id } = data;
  const [formData, setFormData] = useState(0);
  const [response, setResponse] = useState(0);
  const [videoName, setVideoName] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    const { value, id } = e.target;
    // console.log(value,id)
    setFormData({ ...formData, [id]: value });
  };

  const columnDefs = [
    {
      headerName: "Date",
      field: "Date",
      sortable: true,
      // rowGroup: true,
      filter: "agDateColumnFilter",
      // pivot: true,
    },
    {
      headerName: "Name",
      field: "Company_Name",
      filter: true,
      sortable: true,
      // rowGroup: true,
    },
    {
      headerName: "Floor",
      field: "Floor Number",
      filter: true,
      sortable: true,
    },
    {
      headerName: "Camera",
      field: "Camera_Number",
      filter: true,
      sortable: true,
    },
    {
      headerName: "Videos",
      field: "Video_Name",
      filter: true,
      sortable: true,
    },

    {
      headerName: "Actions",
      colId: "action",
      field: "Video_Name",
      cellRendererFramework: (params) => (
        <div>
          <Button variant="contained" size="medium" color="primary">
            Play
          </Button>
        </div>
      ),
    },
  ];

  function onCellClicked(params) {
    // maps to colId: "action" in columnDefs,
    if (params.column.colId === "action") {
      // set videoName for the row
      setVideoName(params.node.data.Video_Name);
      setOpen(true);
    }
  }
  const groupDisplayType = "groupRows";

  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:8000/get_all")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp.results);
        setResponse(resp.results);
        params.api.applyTransaction({ add: resp.results });
      });
  };
  const defaultColGroupDef = {};
  return (
    <div className="App">
      <h1 align="center"> Fraction Dashboard View </h1>
      <h5> Summarized Data </h5>
      <br />
      <div className="ag-theme-alpine" style={{ height: "630px" }}>
        <AgGridReact
          columnDefs={columnDefs}
          groupDisplayType={groupDisplayType}
          onGridReady={onGridReady}
          onCellClicked={onCellClicked}
          pagination={true}
          paginationAutoPageSize={true}
        ></AgGridReact>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {id ? "Playing Now" : "Fraction Video Player"}
          </DialogTitle>
          <DialogContent>
            <iframe width="420" height="315" title="videos" src={videoName} />
            {/* <div>{videoName}</div> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => handleFormSubmit()}
              variant="contained"
            >
              {id ? "Update" : "Download"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
