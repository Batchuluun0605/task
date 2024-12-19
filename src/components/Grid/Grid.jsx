import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
const Grid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await fetch("https://dummyjson.com/products").then(
          (res) => res.json()
        );

        setData(productData.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  console.log(data);

  return (
    <Container fluid className="p-5">
      <Row className=" d-flex  justify-content-between gap-5">
        {data.map((product) => (
          <Col
            key={product.id}
            md={{ span: "2" }}
            sm={4}
            xs={{ span: "6" }}
            className=" border border-black px-3 py-3 d-flex justify-content-center align-items-center flex-column"
          >
            <img
              src={product.images[0]}
              alt="product"
              width={200}
              height={200}
              className="img1"
            />
            <p className="row-p ">{product.title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
