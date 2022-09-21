import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete, Edit } from "@mui/icons-material";
import usePagination from "../../../Hooks/usePagination";
import useCategory from "../../../Hooks/useCategory";

export default function CategoryList() {
  const { pagination, buttonPaginate } = usePagination(15);
  const { categorys, categoryFetch, deleteCategory } = useCategory();
  useEffect(categoryFetch, []);
  return (
    <div className="categoryListBox">
      <h1>Categorys - {categorys.length}</h1>
      <br />
      <div className="actions"></div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Category</h3>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <h3>Edit</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorys.slice(0, pagination).map((element: any) => (
              <TableRow>
                <TableCell>{element.category}</TableCell>
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
                    onClick={() => deleteCategory(element._id)}
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
                      alert("Change the password to a default value!");
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {buttonPaginate(categorys.length)}
      </TableContainer>
    </div>
  );
}
