import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordian from "./Accordian";
import { FaRupeeSign } from "react-icons/fa";
import { Rate } from 'antd';

function Data() {
  const [data, setData] = useState([]);

  // let recordFunction = async () => {
  //   let result = await fetch("https://fakestoreapi.com/products");
  //   result.json().then((json) => setData(json));
  // };

  // let recordFunction =  () => {
  //   fetch("https://fakestoreapi.com/products").then(res=>res.json()).then((json) => setData(json));
  // };

  let recordFunction = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    recordFunction();
  }, []);
  console.log(data);

  return (
    <>
      <Container>
        <Row>
          {data.length > 0 ?
            data.map((item) => {
              return (
                <Col lg={3}>
                  <Card
                    style={{ width: "18rem"  }}
                    align="center"
                    key={item.id}
                    className="mt-4 p-3"
                  >
                    <Card.Img variant="top" src={item.image} style={{height:"300px"}} />
                    <Card.Body>
                        <Card.Text>
                          <Accordian des={item.description} title={item.title}/>
                        </Card.Text>
                      <h2 className="text-danger"><FaRupeeSign />{item.price}</h2>
                      <h5>
                      <Rate allowHalf defaultValue={item.rating.rate} />
                      </h5>
                      <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }) : <p>Loading..</p>}
        </Row>
      </Container>
    </>
  );
}

export default Data;
