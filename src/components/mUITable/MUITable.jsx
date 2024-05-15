import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { tableCellClasses } from "@mui/material";
import "./style.css";
import * as React from "react";

function createData(id, itemName, order, partNumber, isActive) {
  return {
    id,
    itemName,
    order,
    partNumber,
    isActive,
    history: [
      {
        id: "00",
        langDesc: "فارسی",
        langId: "000",
      },
      {
        id: "01",
        langDesc: "انگلیسی",
        langId: "001",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout={1000} unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    partNumber: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    lang: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        langDesc: PropTypes.string.isRequired,
        langId: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData("0", "آیتم 1", 1, "011", false),
  createData("1", "آیتم 2", 2, "012", true),
  createData("2", "آیتم 3", 3, "013", true),
  createData("3", "آیتم 4", 4, "014", false),
  createData("4", "آیتم 5", 5, "015", true),
];

export default function MUITable() {
  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="collapsible table"
        className="tableRoot"
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
          color: "red",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>id</TableCell>
            <TableCell align="right">نام آیتم</TableCell>
            <TableCell align="right">الویت</TableCell>
            <TableCell align="right">پارت نامبر</TableCell>
            <TableCell align="right">فعال/غیر فعال</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
