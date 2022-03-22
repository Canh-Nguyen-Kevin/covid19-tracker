import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

export default function CountrySelector({ value, handleOnChange, countries }) {
  console.log("value", value);
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="" shrink>
          Country
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{
            name: "country",
            id: "country-selector",
          }}
        >
          {countries.map((country) => {
            return (
              <option value={country.ISO2.toLowerCase()} key={country.Slug}>
                {country.Country}
              </option>
            );
          })}
        </NativeSelect>
        <FormHelperText>Select Country</FormHelperText>
      </FormControl>
    </div>
  );
}
