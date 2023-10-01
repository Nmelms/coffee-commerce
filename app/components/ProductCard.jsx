import Image from "next/image";
import { Button } from "react-bootstrap";

const ProductCard = ({ name, img, price, roast }) => {
  console.log(img);
  return (
    <div className="col-4">
      <div className=" d-flex m-2 border product-card">
        <div className="row h-50">
          <Image
            className="product-img"
            height={100}
            width={100}
            src={img}
            alt="product image"
          ></Image>
        </div>
        <div className="row d-flex flex-column align-items-center">
          <p>{name}</p>
          <span className="price text-center">${price}</span>
          <span>{roast}</span>
        </div>

        <Button>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default ProductCard;
