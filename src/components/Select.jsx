import React from "react";
import Option from "./Option";
import { GlobalFormContext } from "../context/FormContext";
const Select = () => {
  const { formDetails, handleChangeType } = GlobalFormContext();
  return (
    <div className="form-control">
      <label htmlFor="dish-type">Type of dish:</label>
      <select
        name="type"
        id="dish-type"
        value={formDetails.type}
        onChange={handleChangeType}
        className="form-input"
        required
      >
        <Option value="" disabled={true} optionText="pasta" />
        <Option value="pizza" optionText="pizza" />
        <Option value="soup" optionText="soup" />
        <Option value="sandwich" optionText="sandwich" />
      </select>

      <span className="validity"></span>
    </div>
  );
};

export default Select;
