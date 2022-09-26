import { useState } from "react";
import useToken from "./useToken";
import useDrivePicker from "react-google-drive-picker";

export default function useProducts() {
  const [openPicker, authResponse] = useDrivePicker();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string | number>("");
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState<string>("");
  const [pictures, setPictures] = useState<any>([]);
  const [description, setDescription] = useState<string>("");
  const [option, setOption] = useState("");
  const [priceOption, setPriceOption] = useState<number>(0);
  const [arrayOption, setArrayOption] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<any>([]);
  const [productsView, setProductsView] = useState("Products List");
  const [token, setToken] = useState<any>("");

  function deleteCloudImageCanceled(token: any, file: any) {
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
      .catch((error) => console.log(error));
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
        const photos = localStorage.getItem("pic");
        setPictures(photos);
        pictures.splice(index, 1);
        localStorage.setItem("pic", JSON.stringify(pictures));
        window.location.reload();
      })
      .catch((error) => console.log("ErrorDelete: " + error));
  }

  function getTokenGoogleAPI() {
    fetch(import.meta.env.VITE_REFRESH_TOKEN, {
      method: "POST",
    })
      .then((response: any) => response.json())
      .then((response: any) => {
        setToken(response.access_token);
      })
      .catch((error: any) => console.log(error));
    return token;
  }

  const handleOpenPicker = (token: any) => {
    openPicker({
      clientId: import.meta.env.VITE_CLIENT_ID,
      developerKey: import.meta.env.VITE_DEVELOPER_ID,
      viewId: "DOCS",
      disableDefaultView: true,
      viewMimeTypes: "image/jpeg",
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
          data.docs.map((element: any) => pictures.push({ id: element.id }));
          localStorage.setItem("pic", JSON.stringify(pictures));
          setPictures(pictures);
          window.location.reload();
        }
      },
    });
  };

  function productsCategoryFetch(category: string | undefined) {
    fetch(`${import.meta.env.VITE_API_URL}/products/category/${category}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }

  function productsSearchFetch(search: string | undefined) {
    fetch(`${import.meta.env.VITE_API_URL}/products/search/${search}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }

  function productsFetch() {
    fetch(`${import.meta.env.VITE_API_URL}/products`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
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

  function registerProduct(event: any) {
    event.preventDefault();
    const photos = localStorage.getItem("pic")
      ? localStorage.getItem("pic")
      : "[{'id': 'undefined'}]";
    setPictures(photos);
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/product/register/${name}/${price}/${photos}/${description}/${category}/${JSON.stringify(
        options
      )}`,
      {
        method: "PUT",
        headers: {
          "x-access-token": useToken(),
        },
      }
    ).then((response) => {
      console.log(response);
      localStorage.removeItem("pic");
      window.location.href = "/admin";
      setMessage("Cadastrado com sucesso!");
    });
  }
  function productID(id: string | undefined) {
    fetch(`${import.meta.env.VITE_API_URL}/product/${id}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
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
