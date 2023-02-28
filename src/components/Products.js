import { useState } from "react";
import Product from "./Product";
import products from "../products.json";
import { Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Products(props) {
  // const [state, setstate] = useState(initialState)

  const [show, setShow] = useState(false);

  // function buy
  // le boutton est desactive si la quantite egale a 0
  const addBuy = (product) => {
    product.quantity--;
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <Product product={product} buyProd={addBuy}></Product>
          </Col>
        ))}
      </Row>
      {show && <Alert variant="primary">You bought an Item</Alert>}
    </Container>
  );
}

export default Products;
