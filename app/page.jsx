import Image from "next/image";
import { fetchWooCommerceProducts } from "./utils/wooCommerceApi";
import { Button } from "react-bootstrap";

export default function Home() {
  fetchWooCommerceProducts();
  return (
    <div className="homepage">
      <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="main-title">
          <h1>Enjoy Your Happy Moment With Coffee</h1>
        </div>

        <Button href="/store" className="shop-btn">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}
