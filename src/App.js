import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductos from "./components/listadoproductos";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              <h2>React Fundamentals</h2>
            </a>
          </nav>
        </div>
      </div>
      <br />
      <ListaProductos />
    </div>
  );
};

export default App;
