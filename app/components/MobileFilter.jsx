"use client";
import { useState } from "react";
import SideNav from "./SideNav";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function MobileFilter({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mobileFilter">
      <Button variant="primary" onClick={handleShow}>
        Filter
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideNav data={data} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobileFilter;
