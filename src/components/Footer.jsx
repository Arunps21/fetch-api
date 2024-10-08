import React from "react";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <>
      <p className="bg-primary p-5 text-center text-light fs-5 mt-3">
        &copy; {new Date().getFullYear()} E-Commerce App. &reg;All Rights
        Reserved.
      </p>
    </>
  );
}

export default Footer;
