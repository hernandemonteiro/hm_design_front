import { Delete } from "@mui/icons-material";
import { useEffect } from "react";
import Button from "../../UI/Button";
import "./FormProduct.scss";
import CryptoJS from "crypto-js";
import Form from "../../UI/Form";
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";

export default function FormProduct() {
  const { categorys, message, categoryFetch} = useCategory();
  const {
    registerProduct,
    setName,
    name,
    setPrice,
    price,
    setOption,
    option,
    addOption,
    options,
    setCategory,
    setPictures,
    setDescription
  } = useProducts();

  useEffect(() =>{
    categoryFetch;
  },[]);
  return (
    <Form onSubmit={registerProduct}>
      <div className="formHeader">
        <h3>Cadastrar Produtos</h3>
        <hr />
      </div>
      <br />
      <label>Nome do produto*:</label>
      <input
        required
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Nome"
      />
      <label>Preço*:</label>
      <input
        required
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        step="any"
        min="1"
        placeholder="Preço"
      />
      <label>Opções:</label>
      <div className="options">
        <input
          type="text"
          onChange={(event: any) => setOption(event.target.value)}
          placeholder="Opções"
          value={option}
        />
        <Button
          type="button"
          className="green"
          children="ADICIONAR OPÇÂO"
          onClick={() => addOption()}
        />
        {options.length > 0 && (
          <table className="tableOptions">
            <thead>
              <tr>
                <th>Option</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {options.map((element: any, index: number) => {
                return (
                  <tr>
                    <td>{element.option}</td>
                    <td>R${parseInt(element.priceOption).toFixed(2)}</td>
                    <td>
                      <Delete />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <label>Categoria*:</label>
      <select required onChange={(e) => setCategory(e.target.value)}>
        <option selected value="">
          Categorias...
        </option>
        {categorys.map((element: any) => (
          <option>{element.category}</option>
        ))}
      </select>
      <br />
      <label>Fotos*:</label>
      <input
        required
        type="file"
        onChange={(event) => setPictures(event.target.files)}
      />
      <label>Descrição*:</label>
      <textarea
        required
        placeholder="Descreva seu produto!"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="actions">
        <Button type="submit" className="green" children="CADASTRAR" />
      </div>
    </Form>
  );
}
