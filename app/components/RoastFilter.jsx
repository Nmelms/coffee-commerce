import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useFilterStore } from "../useFilterStore";

const roastFilter = () => {
  const [value, setValue] = useState("");
  const { filters, setFilter } = useFilterStore();
  const handleChange = (e) => {
    if (filters.roast.includes(e.target.value)) {
      const updatedRoast = filters.roast.filter(
        (value) => value !== e.target.value
      );
      setFilter("roast", updatedRoast);
    } else {
      const updatedRoast = [...filters.roast, e.target.value];
      setFilter("roast", updatedRoast);
    }
  };
  return (
    <Form
      value={value}
      onChange={(e) => handleChange(e)}
      className="roast-filter"
    >
      <Form.Check // prettier-ignore
        type="checkbox"
        id="one"
        label="Dark"
        value="dark"
      />
      <Form.Check // prettier-ignore
        type="checkbox"
        id="one"
        label="Medium"
        value="medium"
      />
      <Form.Check // prettier-ignore
        type="checkbox"
        id="one"
        label="Light"
        value="light"
      />
    </Form>
  );
};

export default roastFilter;
