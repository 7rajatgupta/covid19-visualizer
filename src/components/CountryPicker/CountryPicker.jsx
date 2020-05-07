import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesList, setCountriesList] = useState([]);
  const getCountries = async () => {
    setCountriesList(await fetchCountries());
  };

  useEffect(() => {
    getCountries();
  }, [setCountriesList]);
  return (
    <div>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countriesList.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
