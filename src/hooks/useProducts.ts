import { FormEvent, useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import { errorCase, fetchAPI } from "./helpers/fetchAPI";

export default function useProducts() {
  const [openPicker] = useDrivePicker();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [options, setOptions] = useState<
    Array<{ option: string; priceOption: string | number }>
  >([]);
  const [category, setCategory] = useState("");
  const [pictures, setPictures] = useState<Array<{ id: string }>>([]);
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");
  const [priceOption, setPriceOption] = useState<string | number>(0);
  const [arrayOption] = useState<
    Array<{ option: string; priceOption: string | number }>
  >([]);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<any>([]);
  const [productsView, setProductsView] = useState("Products List");
  const [token, setToken] = useState("");

  function deleteCloudImageCanceled(token: string, file: string) {
    fetch(
      `https://www.googleapis.com/drive/v3/files/${file}?key=${
        import.meta.env.VITE_DEVELOPER_ID
      }`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("removed");
        if (response.error) {
          localStorage.removeItem("pic");
        }
      })
      .catch((error) => errorCase(error));
  }

  function deletePhotoOnRegister(token: string, index: number, id: string) {
    fetch(
      `https://www.googleapis.com/drive/v3/files/${id}?key=${
        import.meta.env.VITE_DEVELOPER_ID
      }`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
      .then((response) => console.log(response))
      .then(() => {
        const photos = localStorage.getItem("pic") || "[]";
        setPictures(JSON.parse(photos));
        pictures.splice(index, 1);
        localStorage.setItem("pic", JSON.stringify(pictures));
        window.location.reload();
      })
      .catch((error) => errorCase(error));
  }

  function getTokenGoogleAPI() {
    fetch(import.meta.env.VITE_REFRESH_TOKEN, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        setToken(response.access_token);
      })
      .catch((error) => errorCase(error));
    return token;
  }

  const handleOpenPicker = (token: string) => {
    openPicker({
      clientId: import.meta.env.VITE_CLIENT_ID,
      developerKey: import.meta.env.VITE_DEVELOPER_ID,
      viewId: "DOCS",
      disableDefaultView: true,
      viewMimeTypes: "image/png",
      token: token,
      showUploadView: true,
      setParentFolder: import.meta.env.VITE_FOLDER_DRIVE,
      showUploadFolders: true,
      supportDrives: false,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }

        if (data.docs != undefined) {
          data.docs.map((element) => pictures.push({ id: element.id }));
          localStorage.setItem("pic", JSON.stringify(pictures));
          setPictures(pictures);
          window.location.reload();
        }
      },
    });
  };

  function productsCategoryFetch(category: string) {
    fetchAPI(`/products/category/${category}`, "GET")
      .then((response) => setProducts(response))
      .catch((error) => errorCase(error));
  }

  function productsSearchFetch(search: string) {
    fetchAPI(`/products/search/${search}`, "GET")
      .then((response) => setProducts(response))
      .catch((error) => errorCase(error));
  }

  function productsFetch() {
    fetchAPI("/products", "GET")
      .then((response) => setProducts(response))
      .catch((error) => errorCase(error));
  }

  function addOption() {
    if (option != "") {
      arrayOption.push({ option, priceOption });
      setOptions(arrayOption);
      setOption("");
      setPriceOption(0);
    } else {
      setMessage("Em caso de Opção preencher com nome!");
    }
  }

  function dropOption(index: number, option: string, price: number) {
    arrayOption.splice(index, 1);
    setOptions(arrayOption);
    setOption(option);
    setPriceOption(price);
  }

  function registerProduct(event: FormEvent) {
    event.preventDefault();
    const photos = localStorage.getItem("pic") || "[{'id': 'undefined'}]";
    setPictures(JSON.parse(photos));
    const priceFormat = parseFloat(price).toFixed(2).toString();
    fetchAPI(
      `/product/register/${name}/${priceFormat}/${JSON.stringify(
        photos
      )}/${description}/${category}/${JSON.stringify(options)}`,
      "PUT"
    ).then(() => {
      localStorage.removeItem("pic");
      window.location.href = "/admin/produtos";
      setMessage("Cadastrado com sucesso!");
    });
  }
  function productID(id: string | undefined) {
    fetchAPI(`/product/${id}`, "GET")
      .then((response) => setProducts(response))
      .catch((error) => errorCase(error));
  }

  return {
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
    setPictures,
    pictures,
    deletePhotoOnRegister,
    handleOpenPicker,
    getTokenGoogleAPI,
    deleteCloudImageCanceled,
    setDescription,
    productsFetch,
    productsView,
    setProductsView,
    products,
    productID,
    productsCategoryFetch,
    productsSearchFetch,
  };
}
