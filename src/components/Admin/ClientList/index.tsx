import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";

export default function ClientList() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState<number>(15);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((response) => response.json())
      .then((response) => setUsers(response.result))
      .catch((error: string) => console.log("Users Error Db:" + error));
  }, []);

  function deleteUser(id: string) {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, { method: "DELETE" })
      .then((response) => {
        console.log(response.status);
        window.location.reload();
      })
      .catch((error: string) => console.log("Users Error delete:" + error));
  }
  return (
    <div className="clientListBox">
      <h1>
        Lista de Clientes -{" "}
        {users.length > 1
          ? users.length + " Usuários"
          : users.length + " Usuário"}
      </h1>
      <div className="actions"></div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: '100%' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Type</h3>
              </TableCell>
              <TableCell>
                <h3>Nome</h3>
              </TableCell>
              <TableCell>
                <h3>Delete</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((element: any) => (
              <TableRow>
                <TableCell>{element.type === "1" ? "User" : "Adm"}</TableCell>
                <TableCell>{element.name}</TableCell>
                <TableCell>
                  <Delete
                    onClick={() => {
                      deleteUser(element._id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
