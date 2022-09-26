import { SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";
import { useState } from "react";
import "./Carroussel.scss";

interface carrousselProps {
  data: any;
}

export default function Carroussel(props: carrousselProps) {
  const [carrousselPrevious, setCarrousselPrevious] = useState(0);
  const [carrousselNext, setCarrousselNext] = useState(1);
  const images = props.data;
  console.log("Previous: " + carrousselPrevious, "Next :" + carrousselNext);
  return (
    <div className="carroussel">
      {images
        ? JSON.parse(images).length > 0 &&
          carrousselNext > 1 && (
            <SkipPreviousOutlined
              onClick={() => {
                setCarrousselPrevious(carrousselPrevious - 1);
                setCarrousselNext(carrousselNext - 1);
              }}
            />
          )
        : ""}
      {images
        ? JSON.parse(images)
            .slice(carrousselPrevious, carrousselNext)
            .map((element: any) => (
              <img
                className="image"
                src={`https://drive.google.com/uc?export=view&id=${element.id}`}
              />
            ))
        : ""}
      {images ? (
        JSON.parse(images).length > 0 &&
        carrousselNext < JSON.parse(images).length ? (
          <SkipNextOutlined
            onClick={() => {
              setCarrousselPrevious(carrousselNext);
              setCarrousselNext(carrousselNext + 1);
            }}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}
