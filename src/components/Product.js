import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";

function Product(props) {
  // pas de constructeur.
  //forme:  const [state, setstate] = useState(initialState)

  const [isBestProduct, setIsBestProduct] = useState(false);
  const [product, setProduct] = useState(props.product);

  const Like = () => {
    if (product.like < 5) {
      setProduct({
        ...product,
        like: product.like + 1,
      });
    } else if (!isBestProduct) {
      setIsBestProduct(true);
    }
  };
  //isBestProduct  booléenne indiquant si le produit est considéré comme le meilleur produit ou non.
  //Si la valeur de isBestProduct est true
  // isBestProduct ? "bestProduct" : "" est une expression conditionnelle tmakini bech ne3mel test
  //si la classe CSS bestProduct(mawjoud fi product.css)  doit être appliquée à un élément ou non.
  //w si isBestProduct = false , donc pas de classe css a appliquer  ""
  return (
    <Card
      style={{ width: "18rem" }}
      className={isBestProduct ? "bestProduct" : ""}
    >
      <Card.Header>
        <Card.Img variant="top" src={"../assets/images/" + product.img} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Quantity: {product.quantity} </Card.Text>
        <Card.Text> Price : {product.price}dt </Card.Text>
        <Card.Text>Liked : {product.like}</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
        <Row>
          <Col md={6}>
            <Button variant="primary" onClick={Like}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="secondary"
              onClick={() => props.buyProd(product)}
              disabled={product.quantity === 0}
            >
              Buy
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product;
