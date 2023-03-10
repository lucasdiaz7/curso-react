import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productId = product.find((e) => e.id === Number(id));
  console.log("productId :>> ", productId);
  const onAdd = (element) => {
    console.log(`Se agregaron ${element} productos`);
  };

  return (
    <div>
      <h1>{productId.name}</h1>
      <h3>{productId.price}</h3>
      <ItemCount stock={productId.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
