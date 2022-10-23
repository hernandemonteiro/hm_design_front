import { Delete } from "@mui/icons-material";
import React, { useEffect } from "react";
import Button from "../../UI/Button";
import {} from "./FormProduct.scss";
import Form from "../../UI/Form";
import useCategory from "../../../hooks/useCategory";
import useProducts from "../../../hooks/useProducts";
import { useGlobalStates } from "../../../providers/useGlobalStates";
import DrivePicker from "../DrivePicker";

export default function FormProduct() {
  const { view, setView } = useGlobalStates();
  const { categorys, categoryFetch } = useCategory();
  const {
    registerProduct,
    setName,
    name,
    setPrice,
    price,
    setOption,
    setPriceOption,
    priceOption,
    option,
    addOption,
    dropOption,
    options,
    message,
    setCategory,
    setDescription,
  } = useProducts();

  useEffect(categoryFetch, []);
  return (
    <div className="formBox">
      <Form onSubmit={registerProduct}>
        <div className="formHeader">
          <h2>Cadastro de Produto</h2>
          <hr />
        </div>
        {view === "" && <DrivePicker />}
        {view === "Finally" && (
          <>
            <Button
              className="warning"
              type="button"
              onClick={() => setView("")}
            >
              VOLTAR PARA FOTOS
            </Button>
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
            <h2>OPÇÕES:</h2>
            <h3 className="ErrorMessage">{message}</h3>
            <label>Titulo da Opção:</label>
            <input
              type="text"
              onChange={(event) => setOption(event.target.value)}
              placeholder="Titulo da Opção"
              value={option}
            />
            <label>Valor da opção:</label>
            <input
              type="number"
              min={0}
              onChange={(event) => setPriceOption(event.target.value)}
              value={priceOption}
              placeholder="Valor da opção"
            />
            <Button type="button" className="green" onClick={() => addOption()}>
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
                  {options.map((element, index: number) => {
                    return (
                      <tr key={element.option}>
                        <td>{element.option}</td>
                        <td>R${element.priceOption}</td>
                        <td>
                          <Delete
                            onClick={() =>
                              dropOption(index, element.option, 0.0)
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            <label>Categoria*:</label>
            <select required onChange={(e) => setCategory(e.target.value)}>
              <option selected value="">
                Categorias...
              </option>
              {categorys.map((element: { category: string }) => (
                <option key={element.category}>{element.category}</option>
              ))}
            </select>
            <br />
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
              <Button
                type="button"
                className="red"
                onClick={() => (window.location.href = "/admin/produtos")}
              >
                CANCELAR
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
