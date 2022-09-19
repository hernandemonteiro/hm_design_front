import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import usePagination from "../../../Hooks/usePagination";

export default function ClientList() {
  const [users, setUsers] = useState([]);
  const { pagination, buttonPaginate } = usePagination(15);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_HASH_SECRET}/users`)
      .then((response) => response.json())
      .then((response) => setUsers(response.result))
      .catch((error: string) => console.log("Users Error Db:" + error));
  }, [users]);

  function deleteUser(id: string) {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_HASH_SECRET}/users/${id}`, { method: "DELETE" })
      .then((response) => {
        console.log(response.status);
        setUsers([]);
      })
      .catch((error: string) => console.log("Users Error delete:" + error));
  }
  return (
    <div className="clientListBox">
      <h1>Users - {users.length}</h1>
      <br />
      <div className="actions"></div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Type</h3>
              </TableCell>
              <TableCell>
                <h3>Nome</h3>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <h3>Edit</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(0, pagination).map((element: any) => (
              <TableRow>
                <TableCell>{element.type === "1" ? "User" : "Adm"}</TableCell>
                <TableCell>{element.name}</TableCell>
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
                    onClick={() => deleteUser(element._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {buttonPaginate(users.length)}
      </TableContainer>
    </div>
  );
}
