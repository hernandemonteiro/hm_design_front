import React from "react";
import { CircularProgress } from "@mui/material";
import {} from "./Loader.scss";

export default function Loader() {
  return (
    <div className="loadingBox">
      <h1 className="LoaderLogo">HM Design</h1>
      <CircularProgress color="success" />
    </div>
  );
}
