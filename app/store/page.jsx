import SideNav from "../components/SideNav";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import ProductList from "../components/ProductList";

const storePage = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();

  return (
    <div className="store">
      <div className="container">
        <div className="row">
          <div className="col-3 position-relative">
            <SideNav />
          </div>
          <div className="col-9 flex-wrap container border d-flex  ">
            <ProductList data={products}></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default storePage;
