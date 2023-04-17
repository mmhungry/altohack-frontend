import React, { useState, useRef } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { BarGraph, BarGraphData } from "@/components/BarGraph";
import { PieChart, PieChartData } from "@/components/PieChart";
import { LineGraph, LineGraphData } from "@/components/LineGraph";

// Add sample data for the BarGraph
const sampleData: BarGraphData[] = [
  {
    x: ["Category 1", "Category 2", "Category 3", "4"],
    y: [10, 15, 13, 12],
    name: "Series 1",
    type: "bar",
    marker: {
      color: "#1F2937",
    },
  },
  {
    x: ["Category 1", "Category 2", "Category 3", "4"],
    y: [12, 9, 14, 16],
    name: "Series 2",
    type: "bar",
    marker: {
      color: "#3B82F6",
    },
  },
];

const pieChartData: PieChartData[] = [
  {
    type: "pie",
    values: [40, 60],
    labels: ["Generation", "Consumption"],
    hole: 0.4,
    rotation: 90,
    marker: {
      colors: ["#40A9FF", "#FABE7C"],
    },
    textposition: ["inside", "inside"],
  },
];
const pieChartData1: PieChartData[] = [
  {
    type: "pie",
    values: [85, 15],
    labels: ["Generation", "hi"],
    hole: 0.4,
    rotation: 0,
    marker: {
      colors: ["#40A9FF", "#B9B1A6"],
    },
    // textposition: ["inside", "inside"],
  },
];
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

export default function DashboardPage() {
  const [selectedTime, setSelectedTime] = useState("Day");

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const timeOptions = ["Day", "Week", "Month", "Year"];
  const peakConsumptionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-12 grid-flow-row gap-2 px-8">
      <span className="col-span-6 row-span-full">
        <Card title="Energy Consumption" className="w-full h-full">
          <div className="px-4 py-2">
            <BarGraph
              data={sampleData}
              title="Energy Consumption"
              subtitle={`Per ${selectedTime}`}
              xAxisTitle={`Time (${selectedTime})`}
              yAxisTitle="Consumption"
              showYAxisTitle
            />
            <span className="flex justify-end">
              <Dropdown
                options={timeOptions}
                onSelect={handleTimeSelect}
                button={
                  <Button variant="primary" size="lg">
                    {selectedTime}
                  </Button>
                }
              />
            </span>
          </div>
        </Card>
      </span>
      <span className="col-end-13 col-span-6 grid grid-cols-6 gap-2">
        <span className="col-span-3">
          <Card title="Energy Consumption" className="w-full h-full">
            <div className="px-4 py-2">
              <PieChart
                data={pieChartData}
                title="Energy Usage"
                subtitle="Generation vs Consumption"
                size="sm"
                consumptionTitle="Consumption"
                consumptionValue={60}
                generationTitle="Generation"
                generationValue={40}
                unit="kWh"
              />
            </div>
          </Card>
        </span>
        <span className="col-span-3">
          <Card title="Carbon Emmision" className="w-full h-full">
            <div className="px-4 py-2">
              <PieChart
                data={pieChartData1}
                title="Energy Usage"
                subtitle="Generation vs Consumption"
                size="sm"
                // consumptionTitle="Consumption"
                // consumptionValue={60}
                // generationTitle="Generation"
                // generationValue={40}
                // unit="kWh"
              />
            </div>
          </Card>
        </span>
        <span className="col-span-6">
          <Card title="Energy Consumption" className="w-full h-full">
            <div className="px-4 py-2">
              <PieChart
                data={pieChartData}
                title="Energy Usage"
                subtitle="Generation vs Consumption"
                size="sm"
                consumptionTitle="Consumption"
                consumptionValue={60}
                generationTitle="Generation"
                generationValue={40}
                unit="kWh"
              />
            </div>
          </Card>
        </span>
      </span>
      <span className="col-span-6">
        <Card
          title="Peak Consumption"
          className="w-fit h-fit "
          ref={peakConsumptionRef}
        >
          <div className="px-4 py-2 m-[-10px]">
            <BarGraph
              data={sampleData}
              title="Energy Consumption"
              subtitle={`Per ${selectedTime}`}
              xAxisTitle={`Time (${selectedTime})`}
              yAxisTitle="Consumption"
              showYAxisTitle
              containerRef={peakConsumptionRef}
            />
            <span className="flex justify-end">
              <Dropdown
                options={timeOptions}
                onSelect={handleTimeSelect}
                button={
                  <Button variant="primary" size="lg">
                    {selectedTime}
                  </Button>
                }
              />
            </span>
          </div>
        </Card>
      </span>
      <span className="col-span-6">
        <Card title="energy performance indicator" className="w-full h-full">
          <div className="px-4 py-2"></div>
        </Card>
      </span>
      <span className="col-span-6">
          <LineGraph
            data={lineData}
            title="Line Graph"
            subtitle="This is a line graph example"
            xAxisTitle="Date"
            yAxisTitle="Value"
            showXAxisTitle
            showYAxisTitle
          />
      </span>
      <span className="col-span-6">
        <Card title="comparative data" className="w-full h-full">
          <div className="px-4 py-2"></div>
        </Card>
      </span>
    </div>
  );
}
