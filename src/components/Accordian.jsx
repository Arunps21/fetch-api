import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Accordian({ des,title }) {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><strong>{title}</strong></Accordion.Header>
          <Accordion.Body>
            {des}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Accordian;
