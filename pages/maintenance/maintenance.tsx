import { Card } from "@/components/Card";
import React, { useState } from "react";
import { LineGraph, LineGraphData } from "@/components/LineGraph";
import { Table } from "@/components/Table";
import { Filter } from "@/components/Filter";
import WorkOrder from "@/assets/icons/workorder.svg";
import WorkAssign from "@/assets/icons/workassign.svg";
import { Dropdown } from "@/components/Dropdown";

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

interface WorkImages {
  [key: string]: string;
}
const workImages: WorkImages = {
  WorkOrder: WorkOrder.src,
  Assign: WorkAssign.src,
};
export default function MaintenancePage() {
  const [selectedWork, setSelectedWork] = useState({
    title: "Work Order",
    image: WorkOrder.src,
  });

  const handleDropdownSelect = (option: string) => {
    setSelectedWork({ title: option, image: workImages[option] });
  };
  return (
    <div className="grid grid-cols-12 grid-row-flow gap-2 px-8">
      <div className="col-span-6 grid grid-cols-6 gap-2">
        <Card
          title="Total Maintenance"
          value="10"
          className="col-span-3 w-full h-full"
        />
        <Card
          title="Ongoing / Onhold"
          value="7"
          className="col-span-3 w-full h-full"
        />
        <Card title="Complete" value="2" className="col-span-3 w-full h-full" />
        <Card title="Overdue" value="1" className="col-span-3 w-full h-full" />
      </div>
      <span className="col-span-6">
        <div className="h-full">
          <LineGraph
            data={lineData}
            title="Work"
            subtitle=""
            xAxisTitle="Time"
            yAxisTitle="No. of Work"
            showXAxisTitle
            showYAxisTitle
          />
        </div>
      </span>
      <div className="col-start-2 col-span-2 hover:cursor-pointer">
        <Dropdown
          options={Object.keys(workImages)}
          onSelect={handleDropdownSelect}
          button={<Card title="WorkOrder / Assign" />}
        />
      </div>
      <div className="col-span-full h-full">
          <Card imageUrl={selectedWork.image} className="col-span-3" />
        </div>
    </div>
  );
}
