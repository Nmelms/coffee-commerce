import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container homepage d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-12">
          <h1 className="main-title mt-5">
            Enjoy Your Happy Moment With Coffee
          </h1>
        </div>
      </div>

      <Button className="shop-btn">SHOP NOW</Button>
    </div>
  );
}
