"use client";

import React from "react";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
const data01 = [
  { name: "Available", value: 100 },
  { name: "Under calibrate", value: 20 },
  { name: "Expire", value: 10 },
];

const COLORS = ["#1f802a", "#FFBB28", "#FF8042"];

export default function SummaryCalibration() {

  return (
    <ResponsiveContainer height={350} width="100%">
      <PieChart width={350} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={150}
          fill="#8884d8"

        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
