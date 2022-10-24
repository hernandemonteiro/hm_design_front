import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import usePagination from "../../../hooks/usePagination";
import useCategory from "../../../hooks/useCategory";

export default function CategoryList() {
  const { pagination, buttonPaginate } = usePagination(15);
  const { categorys, categoryFetch, deleteCategory } = useCategory();
  useEffect(categoryFetch, []);
  return (
    <div className="categoryListBox">
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Categorys - {categorys.length}</h3>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorys
              .slice(0, pagination)
              .map((element: { _id: string; category: string }) => (
                <TableRow key={element._id}>
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
