import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ id, nombre, precio, closeModal }) {
  const handleClose = () => {
    closeModal();
  };

  const today = new Date();

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {id}</p>
        <p>Nombre: {nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Fecha: {today.toDateString()}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
