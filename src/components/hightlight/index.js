import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import React from "react";
import HightLightCard from "./hightLightCard";

export default function HightLight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    { title: "Infected Cases", count: data.Confirmed, type: "confirmed" },
    { title: "Recovered Cases", count: data.Recovered, type: "recovered" },
    { title: "Deaths", count: data.Deaths, type: "death" },
  ];
  return (
    <Grid container spacing={3}>
      {summary.map((item) => {
        return (
          <Grid item sm={4} sx={12} key={item.type}>
            <HightLightCard
              title={item.title}
              count={item.count}
              type={item.type}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
