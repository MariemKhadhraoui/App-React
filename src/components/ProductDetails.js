import React from "react";
import { Col, NavLink, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductDetails(props) {
  const { product } = props;
  return (
   
       <div >
      <div className="col-md-4">
        <img
          src={"../assets/images/" + product.img}
          alt=""
          className="card-img-top"
        />
      </div>

      <div className="card-body col-md-8">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}DT</p>
      </div>
    </div>
    
  );
}

export default ProductDetails;
