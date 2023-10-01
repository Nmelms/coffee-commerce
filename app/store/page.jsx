import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
import ProductCard from "../components/ProductCard";

const storePage = async () => {
  const products = await fetchWooCommerceProducts();
  console.log(products);
  return (
    <div className="store">
      <div className="container">
        <div className="row">
          <div className="col-3 ">this is the nav sections</div>
          <div className="col-9 container  border ">
            <div className="row">
              {products.data.map((product) => {
                return (
                  <ProductCard
                    img={product.images[0].src}
                    name={product.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default storePage;
