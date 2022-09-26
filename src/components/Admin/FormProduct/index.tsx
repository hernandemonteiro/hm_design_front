import { Delete } from "@mui/icons-material";
import { useEffect } from "react";
import Button from "../../UI/Button";
import "./FormProduct.scss";
import Form from "../../UI/Form";
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import { useAuth } from "../../../Hooks/useAuth";
import DrivePicker from "../DrivePicker";

export default function FormProduct() {
  const { view, setView } = useAuth();
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
        {view === "" && <DrivePicker />}
        {view === "Finally" && (
          <>
            <div className="actions">
              <Button
                className="warning"
                type="button"
                children="VOLTAR PARA FOTOS"
                onClick={() => setView("")}
              />
            </div>
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
              <h3 className="ErrorMessage">{message}</h3>
              <input
                type="text"
                onChange={(event: any) => setOption(event.target.value)}
                placeholder="Opções"
                value={option}
              />
              <input
                type="number"
                min={0}
                onChange={(event: any) => setPriceOption(event.target.value)}
                value={priceOption}
                placeholder="Valor da opção"
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
                            <Delete
                              onClick={() =>
                                dropOption(
                                  index,
                                  element.option,
                                  element.priceOption
                                )
                              }
                            />
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
            <div className="actions">
              <Button type="submit" className="green" children="CADASTRAR" />
              <Button
                type="button"
                className="red"
                children="CANCELAR"
                onClick={() => (window.location.href = "/admin/produtos")}
              />
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
