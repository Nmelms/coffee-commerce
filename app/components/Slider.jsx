import Form from "react-bootstrap/Form";
import { useStore } from "../appStore";

function Slider() {
  const maxPrice = useStore((state) => state.maxPrice);

  const handleChange = (e) => {
    useStore.setState((state) => ({
      maxPrice: e.target.value,
    }));
  };
  return (
    <>
      <Form.Label>Range</Form.Label>
      <Form.Range onChange={handleChange} value={maxPrice} min={0} max={50} />
    </>
  );
}

export default Slider;
