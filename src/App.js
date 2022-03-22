import { sortBy } from "lodash";
import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/countrySelector";
import HightLight from "./components/hightlight";
import Summary from "./components/summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  const handleOnChange = React.useCallback((e) => {
    setSelectedCountryId(e.target.value);
    console.log("selected", e.target.value);
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountries();
        const countries = sortBy(res.data, "Country");
        setCountries(countries);
        setSelectedCountryId("vn");
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
        console.log("report");
      });
    }
  }, [selectedCountryId]);

  return (
    <div className="App">
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <HightLight report={report} />
      <Summary report={report} countryId={selectedCountryId} />
    </div>
  );
}
export default App;
