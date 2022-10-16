import { SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Carroussel.scss";

interface carrousselProps {
  data: string;
}

export default function Carroussel(props: carrousselProps) {
  const [carroussel, setCarroussel] = useState(0);
  const images = props.data;
  return (
    <div className="carroussel">
      {images
        ? JSON.parse(images).length > 0 &&
          carroussel > 0 && (
            <SkipPreviousOutlined
              onClick={() => setCarroussel(carroussel - 1)}
            />
          )
        : ""}
      {images ? (
        <img
          className="image"
          src={`https://drive.google.com/uc?export=view&id=${
            JSON.parse(images)[carroussel].id
          }`}
        />
      ) : (
        ""
      )}
      {images
        ? JSON.parse(images).length > 0 &&
          carroussel < JSON.parse(images).length - 1 && (
            <SkipNextOutlined onClick={() => setCarroussel(carroussel + 1)} />
          )
        : ""}
    </div>
  );
}
