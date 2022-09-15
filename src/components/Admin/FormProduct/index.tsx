import React, { useState } from "react";
import "./FormProduct.scss";

export default function FormProduct() {
  const [category, setCategory] = useState("");
  const [option, setOption] = useState<string>();

  let options: any = [];
  function addOption() {
    options.push(option);
    console.log(options);
    setOption("");
  }
  return (
    <form>
      <div className="formHeader">
      <h3>Cadastrar Produtos</h3>
      <hr/>
      </div>
      <br />
      <label>Nome do produto*:</label>
      <input required type="text" placeholder="Nome" />
      <label>Preço*:</label>
      <input required type="number" step="any" min="1" placeholder="Preço" />
      <label>Opções:</label>
      <div className="options">
        <input
          type="text"
          onChange={(event: any) => setOption(event.target.value)}
          placeholder="Opções"
          value={option}
        />
        <button type="button" onClick={addOption}>
          ADICIONAR OPÇÂO
        </button>
      </div>
      <label>Categoria*:</label>
      <select required onChange={(e) => setCategory(e.target.value)}>
        <option selected value="">
          Categorias...
        </option>
        <option>Opção</option>
      </select>
      <br />
      <label>Fotos*:</label>
      <input required type="file" />
      <label>Descrição*:</label>
      <textarea required placeholder="Descreva seu produto!"></textarea>
      <div className="actions">
        <button type="button">CANCELAR</button>
        <button type="submit">CADASTRAR</button>
      </div>
    </form>
  );
}
