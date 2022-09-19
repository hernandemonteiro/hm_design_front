import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Check, Delete, Edit } from "@mui/icons-material";
import usePagination from "../../../Hooks/usePagination";

export default function InProductionList() {
  const [orders, setOrders] = useState([]);
  const { pagination, buttonPaginate } = usePagination(15);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_HASH_SECRET}/orders`)
      .then((response) => response.json())
      .then((response) => setOrders(response.result))
      .catch((error: string) => console.log("Orders Error Db:" + error));
  }, []);

  return (
    <div className="ordersProductionListBox">
      <h1>In Production - {orders.length}</h1>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Type</h3>
              </TableCell>
              <TableCell>
                <h3>valor</h3>
              </TableCell>
              <TableCell>
                <h3>Status</h3>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <h3>Edit</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.slice(0, pagination).map((element: any) => (
              <TableRow>
                <TableCell>{element._id}</TableCell>
                <TableCell>{element.status}</TableCell>
                <TableCell>{element.price}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Delete
                    sx={{
                      color: "red",
                      margin: "2%",
                      padding: "2%",
                      "&:hover": {
                        borderRadius: "50%",
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={() => {
                      alert("implementar delete!");
                    }}
                  />
                  <Edit
                    color="success"
                    sx={{
                      margin: "2%",
                      padding: "2%",
                      marginLeft: "15%",
                      "&:hover": {
                        borderRadius: "50%",
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={() => {
                      alert("implementar edição!");
                    }}
                  />
                  <Check
                    color="success"
                    sx={{
                      margin: "2%",
                      padding: "2%",
                      marginLeft: "15%",
                      "&:hover": {
                        borderRadius: "50%",
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={() => {
                      alert("implement check!");
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {buttonPaginate(orders.length)}
      </TableContainer>
    </div>
  );
}
