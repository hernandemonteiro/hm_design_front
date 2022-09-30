import { useGlobalStates } from "../../../providers/useGlobalStates";
import Button from "../../UI/Button";
import useProducts from "../../../Hooks/useProducts";
import "./DrivePicker.scss";
import React, { useEffect } from "react";
import { Delete } from "@mui/icons-material";

export default function DrivePicker() {
  const { setView } = useGlobalStates();
  const {
    handleOpenPicker,
    getTokenGoogleAPI,
    pictures,
    setPictures,
    deletePhotoOnRegister,
  } = useProducts();
  function initialConfig() {
    return getTokenGoogleAPI();
  }
  useEffect(() => {
    initialConfig();
    const imgs: unknown | string = localStorage.getItem("pic")
      ? localStorage.getItem("pic")
      : "[]";
    setPictures(JSON.parse(imgs));
    if (JSON.parse(imgs).length == 0) {
      localStorage.removeItem("pic");
    }
  }, []);
  return (
    <>
      <div className="actions">
        <Button
          type="button"
          className="green"
          onClick={() => handleOpenPicker(initialConfig())}
        >
          ADICIONAR FOTOS
        </Button>
        <Button
          type="button"
          className="red"
          onClick={() => (window.location.href = "/admin/produtos")}
        >
          CANCELAR
        </Button>
      </div>
      {pictures.length > 0 && (
        <>
          <div className="imgBox">
            {pictures.map((element: string, index: number) => {
              return (
                <>
                  <img
                    className="imgView"
                    src={`https://drive.google.com/uc?export=view&id=${element.id}`}
                  />
                  <Delete
                    onClick={() =>
                      deletePhotoOnRegister(initialConfig(), index, element.id)
                    }
                    sx={{ color: "red" }}
                  />
                </>
              );
            })}
          </div>
          <Button className="green" onClick={() => setView("Finally")}>
            IR PARA OPÇÕES
          </Button>
        </>
      )}
    </>
  );
}
