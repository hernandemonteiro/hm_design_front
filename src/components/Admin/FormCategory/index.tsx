import React from "react";

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
        <button type="button">CANCELAR</button>
        <button type="submit">CADASTRAR</button>
      </div>
    </form>
  );
}
