import { Card } from "@/components/Card";
import React, { useState } from "react";
import { LineGraph, LineGraphData } from "@/components/LineGraph";
import { Table } from "@/components/Table";
import { Filter } from "@/components/Filter";

const lineData: LineGraphData[] = [
  {
    x: ["2022-01-01", "2022-01-02", "2022-01-03"],
    y: [10, 15, 13],
    name: "Series 1",
    type: "scatter",
    mode: "lines",
    line: { color: "blue" },
  },
  {
    x: ["2022-01-01", "2022-01-02", "2022-01-03"],
    y: [12, 18, 29],
    name: "Series 2",
    type: "scatter",
    mode: "lines",
    line: { color: "red" },
  },
];

const tableData = {
  header: ["Header 1", "Header 2", "Header 3", "4", "5", "6"],
  data: [
    [
      "Row 1-1",
      "Row 1-2",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-",
    ],
    [
      "Row 2-1",
      "Row 2-2",
      "Row 2-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
    ],
    [
      "Row 3-1",
      "Row 3-2",
      "Row 3-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
    ],
    [
      "Row 3-1",
      "Row 3-2",
      "Row 3-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
    ],
    [
      "Row 3-1",
      "Row 3-2",
      "Row 3-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
    ],
    [
      "Row 3-1",
      "Row 3-2",
      "Row 3-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
      "Row 1-3",
    ],
  ],
};

function handleCardClick() {
  console.log("click");
}

const handleFilterChange = (value: string) => {
  // Apply filtering logic based on the selected value
};

export default function MaintenancePage() {
  const options = ["Option 1", "Option 2", "Option 3"]; // Add your filter options here
  return (
    <div className="grid grid-cols-12 grid-row-flow gap-2 px-8">
      <div className="col-span-6 grid grid-cols-6 gap-2">
        <Card
          title="Total Maintenance"
          value="10"
          className="col-span-3 w-full h-full"
        />
        <Card
          title="Total Maintenance"
          value="10"
          className="col-span-3 w-full h-full"
        />
        <Card
          title="Total Maintenance"
          value="10"
          className="col-span-3 w-full h-full"
        />
        <Card
          title="Total Maintenance"
          value="10"
          className="col-span-3 w-full h-full"
        />
      </div>
      <span className="col-span-6">
        <div className="h-full">
          <LineGraph
            data={lineData}
            title="energy performance indicator"
            subtitle="This is a line graph example"
            xAxisTitle="Date"
            yAxisTitle="Value"
            showXAxisTitle
            showYAxisTitle
          />
        </div>
      </span>
      <Card
        title="Total Maintenance"
        onClick={handleCardClick}
        className="col-span-2 w-full h-[100px]"
      />
      <Card
        title="Total Maintenance"
        onClick={handleCardClick}
        className="col-span-2 w-full h-full"
      />
      <Card
        title="Total Maintenance"
        onClick={handleCardClick}
        className="col-span-2 w-full h-full"
      />
      <Card
        title="Total Maintenance"
        onClick={handleCardClick}
        className="col-span-2 w-full h-full"
      />
      <Card
        title="Total Maintenance"
        onClick={handleCardClick}
        className="col-span-2 w-full h-full"
      />
      <Card
        title="Total Maintenance"
        onClick={handleCardClick}
        className="col-span-2 w-full h-full"
      />
      <div className="col-start-2 flex col-span-10 items-center bg-gray-50">
        <Filter options={options} onChange={handleFilterChange} />
      </div>
      <span className="col-start-2 col-span-10">
        <Table tableData={tableData} />
      </span>
    </div>
  );
}
