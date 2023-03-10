import { createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListenContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const productCategory = product.filter((c) => c.category === id);

  useEffect(() => {
    const productList = new Promise((res, rej) => {
      res(id ? productCategory : product);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListenContainer;
