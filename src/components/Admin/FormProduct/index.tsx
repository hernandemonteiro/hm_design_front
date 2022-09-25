import { Delete } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import "./FormProduct.scss";
import Form from "../../UI/Form";
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import ButtonLink from "../../UI/ButtonLink";

export default function FormProduct() {
  const { categorys, message, categoryFetch } = useCategory();
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
    handleOpenPicker,
    getTokenGoogleAPI,
    setDescription,
  } = useProducts();
  function initialConfig() {
    categoryFetch();
    return getTokenGoogleAPI();
  }
  useEffect(initialConfig, []);
  const imgs: any = localStorage.getItem("pic")
    ? localStorage.getItem("pic")
    : "[]";
  function showImages() {
    return JSON.parse(imgs).map((element: any) => (
      <img
        className="imgView"
        src={`https://drive.google.com/uc?export=view&id=${element.id}`}
      />
    ));
  }
  return (
    <div className="formBox">
      <Form onSubmit={registerProduct}>
        <div className="formHeader">
          <h2>Cadastrar Produto</h2>
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
        <label>Descrição*:</label>
        <textarea
          required
          placeholder="Descreva seu produto!"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Button
          type="button"
          className="green"
          onClick={() => handleOpenPicker(initialConfig())}
          children="ADICIONAR FOTOS"
        />
        <div className="imgBox">{showImages()}</div>
        <div className="actions">
          <Button type="submit" className="green" children="CADASTRAR" />
          <Button
            onClick={() => (window.location.href = "/admin")}
            className="red"
            children="CANCELAR"
          />
        </div>
      </Form>
    </div>
  );
}
