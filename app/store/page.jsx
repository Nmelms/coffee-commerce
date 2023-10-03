import SideNav from "../components/SideNav";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import ProductList from "../components/ProductList";
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";

const storePage = async () => {
  let products = await fetchWooCommerceProducts();
  console.log(products);
  return (
    <div className="store">
      <div className="container">
        <div className="row">
          <div className="col-3 position-relative">
            <SideNav />
          </div>
          <div className="col-9 flex-wrap container border d-flex  ">
            <ProductList></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default storePage;
