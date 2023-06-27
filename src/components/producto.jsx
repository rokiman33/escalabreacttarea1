import React from "react";
const Producto = ({ id, name, price }) => {
  return (
    <div>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default Producto;
