import React from "react";
import { GlobalFormContext } from "../context/FormContext";
import FormField from "./FormField";
import Button from "./Button";
import Option from "./Option";
import Select from "./Select";

const Form = () => {
  const {
    formDetails,
    selectedType: type,
    handleChange,
    handleSubmit,
  } = GlobalFormContext();
  return (
    <section className="form-container form-small">
      <h2>Setup dish details</h2>
      <form className="setup-form" onSubmit={handleSubmit}>
        {/* Name of dish  */}
        <FormField
          htmlFor="dish-name"
          labelText="Name of dish"
          type="text"
          name="name"
          id="dish-name"
          value={formDetails.name}
          placeholder="bolognese pasta"
          minLength="3"
          onChange={handleChange}
        />

        {/* Preparation time of dish  */}
        <FormField
          htmlFor="dish-time"
          labelText="Preparation time of dish. Enter a time, example: 02:15:45 (in the
            form HH:MM:SS)"
          type="tel"
          pattern="[0-9]{2}:[0-5]{1}[0-9]{1}:[0-5]{1}[0-9]{1}"
          name="preparation_time"
          id="dish-time"
          value={formDetails.preparation_time}
          placeholder="01:25:18"
          onChange={handleChange}
        />

        {/* Type of dish  */}
        <Select />

        {type === "pizza" && (
          <>
            {/*number_slices_pizza */}
            <FormField
              htmlFor="number_slices_pizza"
              labelText="Number of slices of pizza:"
              type="number"
              name="no_of_slices"
              id="number_slices_pizza"
              defaultValue="0"
              placeholder="0"
              min={1}
              onChange={handleChange}
            />

            {/*diameter step="0.1" will allow 0.1; 0.2; .. */}
            <FormField
              htmlFor="diameter_pizza"
              labelText="Diameter of pizza:"
              type="number"
              step="0.01"
              name="diameter"
              id="diameter_pizza"
              defaultValue="0"
              placeholder="0"
              onChange={handleChange}
              min={0.01}
            />
          </>
        )}

        {/* spiciness_scale*/}
        {type === "soup" && (
          <>
            <FormField
              htmlFor="spiciness_scale"
              labelText="Spiciness scale (1-10):"
              type="number"
              name="spiciness_scale"
              id="spiciness_scale"
              defaultValue="0"
              onChange={handleChange}
              placeholder="1"
              min={1}
              max={10}
            />
          </>
        )}

        {/* number of slices of bread*/}
        {type === "sandwich" && (
          <FormField
            htmlFor="number_slices_bread"
            labelText="Number of slices of bread:"
            type="number"
            name="slices_of_bread"
            id="number_slices_bread"
            defaultValue="0"
            placeholder="0"
            onChange={handleChange}
            min={1}
            max={100}
          />
        )}
        <Button name="Submit" />
      </form>
    </section>
  );
};

export default Form;
