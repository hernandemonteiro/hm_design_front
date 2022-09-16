import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete, Edit } from "@mui/icons-material";
import usePagination from "../../../Hooks/usePagination";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "../../Shop/Button";

export default function ClientList() {
  const [users, setUsers] = useState([]);
  const { pagination, buttonPaginate } = usePagination(15);
  const [open, setOpen] = React.useState(false);

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
                    onClick={() => setOpen(true)}
                  />
                  <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {element.name}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Você está prestes a deletar um usuário, tem certeza?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button className="red" onClick={() => setOpen(false)}>
                        Cancelar
                      </Button>
                      <Button
                        className="green"
                        onClick={() => deleteUser(element._id)}
                      >
                        Deletar
                      </Button>
                    </DialogActions>
                  </Dialog>
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
