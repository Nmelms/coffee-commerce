import Image from "next/image";

const ProductCard = ({ name, img }) => {
  console.log(img);
  return (
    <div className="col-4 d-flex border product-card">
      <Image height={100} width={100} src={img} alt="product image"></Image>
      {name}
    </div>
  );
};

export default ProductCard;
