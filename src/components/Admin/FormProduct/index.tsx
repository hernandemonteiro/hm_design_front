import React, { useState } from "react";

export default function FormProduct() {
  const [option, setOption] = useState<any>();
  let arrayOptions: any = [];
  function addOption(){
    arrayOptions.push(option);
    setOption('');
    console.log
  }
  return (
    <form>
      <h1>Cadastrar Produto</h1>
      <input required type="text" placeholder="Nome" />
      <input required type="number" step="any" min="1" placeholder="Preço" />
      <div className="options">
        <input type="text" onChange={(event: any) => setOption(event.target.value)} placeholder="Opções" value={option} />
        <div onClick={addOption}>ADICIONAR OPÇÂO</div>
        {arrayOptions}
      </div>
      <select required>
        <option selected>Selecione uma Categoria</option>
      </select>
      <input type="file" />
      <textarea required placeholder="Descrição"></textarea>
      <div className="actions">
        <button>CANCELAR</button>
        <button type="submit">CADASTRAR</button>
      </div>
    </form>
  );
}
