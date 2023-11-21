import SideNav from "../components/SideNav";
import ProductList from "../components/ProductList";
import MobileFilter from "../components/MobileFilter";

const storePage = async () => {
  let hostURL = process.env.NEXT_PUBLIC_FRONT_URL;
  let response = await fetch(`${hostURL}/api/products`, {
    method: "GET",
    cache: "no-cache",
  });
  const products = await response.json();
  console.log(products);

  return (
    <div className="store">
      <div className="container">
        <div className="row">
          <div className="col-md-3 position-relative">
            {/* <SideNav data={proudctData} />
            <MobileFilter data={proudctData} /> */}
          </div>
          <div className="col-12 col-md-9 flex-wrap container border d-flex  ">
            <ProductList products={products}></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default storePage;
