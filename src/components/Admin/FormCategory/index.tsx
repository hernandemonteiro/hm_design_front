import React from "react";
import Button from "../../Shop/Button";

export default function FormCategory() {
  return (
    <form>
      <div className="formHeader">
        <h3>Cadastrar Categoria</h3>
        <hr />
      </div>
      <br />
      <label>Categoria:*</label>
      <input required type="text" placeholder="categoria" />
      <div className="actions">
        <Button type="submit" className="green">
          CADASTRAR
        </Button>
      </div>
    </form>
  );
}
