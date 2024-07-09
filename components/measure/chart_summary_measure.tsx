"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    date: "1-jul-2024",
    ok: 100,
    ng: 5,
  },
  {
    date: "2-jul-2024",
    ok: 170,
    ng: 4,
  },
  {
    date: "3-jul-2024",
    ok: 130,
    ng: 3,
  },
  {
    date: "4-jul-2024",
    ok: 90,
    ng: 2,
  },
  {
    date: "5-jul-2024",
    ok: 100,
    ng: 5,
  },
  {
    date: "6-jul-2024",
    ok: 140,
    ng: 3,
  },
  {
    date: "7-jul-2024",
    ok: 120,
    ng: 1,
  },
];

export default function SummaryMeasure() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" orientation="left" stroke="#1f802a">
          <Label
            value="Result OK"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle", fill: "#1f802a" }}
          />
        </YAxis>
        <YAxis yAxisId="right" orientation="right" stroke="#c73432">
          <Label
            value="Result NG"
            angle={-90}
            position="insideRight"
            style={{ textAnchor: "middle", fill: "#c73432" }}
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="ok"
          fill="#1f802a"
          isAnimationActive={true}
        />
        <Bar
          yAxisId="right"
          dataKey="ng"
          fill="#c73432"
          isAnimationActive={true}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
