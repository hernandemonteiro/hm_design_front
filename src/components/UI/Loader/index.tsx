import React from "react";
import { CircularProgress } from "@mui/material";
import {} from "./Loader.scss";

export default function Loader() {
  return (
    <div className="loadingBox">
      <CircularProgress color="success" />
    </div>
  );
}
