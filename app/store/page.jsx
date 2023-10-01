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
          <div className="col-9 flex-wrap container border d-flex  ">
            {products.data.map((product) => {
              return (
                <ProductCard
                  img={product.images[0].src}
                  price={product.price}
                  name={product.name}
                  roast={product.acf.coffee_roast}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default storePage;
