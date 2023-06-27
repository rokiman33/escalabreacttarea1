import React, { useState } from "react";
import Producto from "./producto";
import { data } from "../data/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ModalComponent from "../components/modalComponent";

const ListaProductos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredData = data.filter((producto) =>
    producto.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Lista de Productos</h3>
              <input
                type="text"
                className="form-control float-right"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Buscar producto"
              />
            </div>
            <div className="card-body">
              <div className="table responsive">
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.name}</td>
                        <td>{producto.price}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => openModal(producto)}
                          >
                            <i className="fas fa-info-circle"></i> Detalles
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ModalComponent
          id={selectedProduct.id}
          nombre={selectedProduct.name}
          precio={selectedProduct.price}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ListaProductos;
