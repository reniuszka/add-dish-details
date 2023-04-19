import React from "react";

const Option = ({ value, optionText, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {optionText}
    </option>
  );
};

export default Option;
