import { Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Button from "../../UI/Button";
import "./FormProduct.scss";
import CryptoJS from "crypto-js";


export default function FormProduct() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string | number>("");
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState<string>("");
  const [pictures, setPictures] = useState<any>("");
  const [description, setDescription] = useState<string>("");

  const [option, setOption] = useState("");
  const [priceOption, setPriceOption] = useState(0.0);
  const [categorys, setCategorys] = useState([]);
  const [arrayOption, setArrayOption] = useState<any>([]);
  const [message, setMessage] = useState("");

  function addOption() {
    arrayOption.push({ option, priceOption });
    setOptions(arrayOption);
    console.table(options);
    setOption("");
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_HASH_SECRET}/categorys`)
      .then((response) => response.json())
      .then((response) => setCategorys(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, []);
  function registerProduct(event: any) {
    event.preventDefault();
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/product/${name}/${price}/${pictures}/${description}/${category}/${JSON.stringify(options)}`,
      {
        method: "PUT",
      }
    ).then((response) => {
      console.log(response);
      setMessage("Cadastrado com sucesso!");
    });
  }
  return (
    <form onSubmit={registerProduct}>
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
        placeholder="Nome"
      />
      <label>Preço*:</label>
      <input
        required
        type="number"
        onChange={(e) => setPrice(e.target.value)}
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
        <Button type="button" onClick={() => addOption()} className="green">
          ADICIONAR OPÇÂO
        </Button>
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
        onChange={(e) => {
          setPictures(e.target.files)
          let encryptedImage = CryptoJS.SHA256(pictures[0])
          console.log(encryptedImage)
        }}
      />
      <label>Descrição*:</label>
      <textarea
        required
        placeholder="Descreva seu produto!"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="actions">
        <Button type="submit" className="green">
          CADASTRAR
        </Button>
      </div>
    </form>
  );
}
