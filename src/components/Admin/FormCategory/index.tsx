import React, { useState } from "react";
import useToken from "../../../Hooks/useToken";
import Button from "../../UI/Button";

export default function FormCategory() {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  function registerCategory(event: any) {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/category/register/${category}`, {
      method: "PUT",
        headers: {
          "x-access-token": useToken(),
        },
    
    }).then(() => {
      setMessage("Cadastrado com sucesso!");
      setCategory("");
    });
  }
  return (
    <form onSubmit={registerCategory}>
      <div className="formHeader">
        <h3>Cadastrar Categoria</h3>
        <hr />
        {message}
      </div>
      <br />
      <label>Categoria:*</label>
      <input
        required
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="categoria"
      />
      <div className="actions">
        <Button type="submit" className="green">
          CADASTRAR
        </Button>
      </div>
    </form>
  );
}
