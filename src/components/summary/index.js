import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
// import { getMapDataByCountryId } from "../apis";
import HighMaps from "../charts/highMap";
import LineChart from "../charts/lineCharts";

export default function Summary({ report, countryId }) {
  const [mapData, setMapData] = useState({});

  console.log("data", mapData);
  useEffect(() => {
    const countryMap = async () => {
      if (countryId) {
        try {
          const res =
            await require(`@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`);
          setMapData(res);
          console.log("Résponse", res);
        } catch (err) {
          console.log(err);
        }
      }
    };
    console.log("why");
    countryMap();
  }, [countryId]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} sx={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} sx={12}>
        <HighMaps mapData={mapData} />
      </Grid>
    </Grid>
  );
}
