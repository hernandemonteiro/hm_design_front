import React, { useState } from "react";
import useCategory from "../../../Hooks/useCategory";
import useToken from "../../../Hooks/useToken";
import Button from "../../UI/Button";
import Form from "../../UI/Form";

export default function FormCategory() {
  const { registerCategory, setCategory, message } = useCategory();
  return (
    <Form onSubmit={registerCategory}>
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
        <Button type="submit" className="green" children="CADASTRAR" />
      </div>
    </Form>
  );
}
