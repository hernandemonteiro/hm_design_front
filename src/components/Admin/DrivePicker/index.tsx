import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import useProducts from "../../../Hooks/useProducts";
import "./DrivePicker.scss";
import { useEffect } from "react";
import { Delete } from "@mui/icons-material";

export default function DrivePicker() {
  const { setView } = useAuth();
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
    const imgs: any = localStorage.getItem("pic")
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
          children="ADICIONAR FOTOS"
          onClick={() => handleOpenPicker(initialConfig())}
        />
        <Button
          type="button"
          className="red"
          children="CANCELAR"
          onClick={() => window.location.href = "/admin/produtos"}
        />
      </div>
      {pictures.length > 0 && (
        <>
          <div className="imgBox">
            {pictures.map((element: any, index: number) => {
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
          <Button
            className="green"
            children="IR PARA OPÇÕES"
            onClick={() => setView("Finally")}
          />
        </>
      )}
    </>
  );
}
