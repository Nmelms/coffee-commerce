import SideNav from "../components/SideNav";
import ProductList from "../components/ProductList";
import MobileFilter from "../components/MobileFilter";

const getProductsData = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 60,
    },
  });
  const products = await response.json();
  return products;
};

const storePage = async () => {
  const proudctData = await getProductsData();

  return (
    <div className="store">
      <div className="container">
        <div className="row">
          <div className="col-md-3 position-relative">
            <SideNav data={proudctData} />
            <MobileFilter data={proudctData} />
          </div>
          <div className="col-12 col-md-9 flex-wrap container border d-flex  ">
            <ProductList></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default storePage;
