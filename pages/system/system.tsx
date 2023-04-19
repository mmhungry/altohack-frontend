import React, { useState, useCallback } from "react";
import { Card } from "@/components/Card";
import { BarGraph, BarGraphData } from "@/components/BarGraph";
import Light from "@/assets/icons/light.svg";
import Device from "@/assets/icons/device.svg";
import Air from "@/assets/icons/air.svg";
import WaterPump from "@/assets/icons/waterpump.svg";
import ERV from "@/assets/icons/erv.svg";
import RiserF1 from "@/assets/icons/riserF1.svg";
import RiserF2 from "@/assets/icons/riserF2.svg";
import RiserF3 from "@/assets/icons/riserF3.svg";
import RiserF4 from "@/assets/icons/riserF4.svg";
import PlanF1 from "@/assets/icons/planF1.svg";
import PlanF2 from "@/assets/icons/planF2.svg";
import PlanF3 from "@/assets/icons/planF3.svg";
import PlanF4 from "@/assets/icons/planF4.svg";
import { Dropdown } from "@/components/Dropdown";

interface FloorImages {
  [key: string]: string;
}
const floorImages: FloorImages = {
  Floor1: RiserF1.src,
  Floor2: RiserF2.src,
  Floor3: RiserF3.src,
  Floor4: RiserF4.src,
};
const floorImages1: FloorImages = {
  Floor1: PlanF1.src,
  Floor2: PlanF2.src,
  Floor3: PlanF3.src,
  Floor4: PlanF4.src,
};
const sampleData: BarGraphData[] = [
  {
    x: ["Jan", "Feb", "Mar", "apr"],
    y: [8, 4, 1, 0],
    name: "Series 1",
    type: "bar",
    marker: {
      color: "#1F2937",
    },
  },
];

const sampleData1: BarGraphData[] = [
  {
    x: ["Jan", "Feb", "Mar", "apr"],
    y: [30, 41, 5, 0],
    name: "Light 1",
    type: "bar",
    marker: {
      color: "#1F2937",
    },
  },
  {
    x: ["Jan", "Feb", "Mar", "apr"],
    y: [30, 41, 5, 0],
    name: "Light 2",
    type: "bar",
    marker: {
      color: "#692F32",
    },
  },
  {
    x: ["Jan", "Feb", "Mar", "apr"],
    y: [30, 41, 5, 0],
    name: "Light 3",
    type: "bar",
    marker: {
      color: "#EE9485",
    },
  },
  {
    x: ["Jan", "Feb", "Mar", "apr"],
    y: [30, 41, 61, 5],
    name: "Light 4",
    type: "bar",
    marker: {
      color: "#E1AA9B",
    },
  },
];
interface CardImages {
  [key: string]: string;
}

const cardImages: CardImages = {
  Light: Light.src,
  AirCondition: Air.src,
  Ventilator: ERV.src,
  WaterPump: WaterPump.src,
  Elevator: Device.src,
  Others: Device.src,
};

export default function SystemPage() {
  const [selectedCard, setSelectedCard] = useState({
    title: "Light",
    image: Light.src,
  });

  const handleDropdownSelect = (option: string) => {
    setSelectedCard({ title: option, image: cardImages[option] });
  };

  const [selectedFloor, setSelectedFloor] = useState({
    title: "Floor 1",
    image: RiserF1.src,
  });
  const [selectedFloor1, setSelectedFloor1] = useState({
    title: "Floor 1",
    image: PlanF1.src,
  });

  const handleFloorDropdownSelect = (option: string) => {
    setSelectedFloor({ title: option, image: floorImages[option] });
    setSelectedFloor1({ title: option, image: floorImages1[option] });
  };

  return (
    <>
      <div className="grid grid-cols-12 grid-row-flow gap-2 px-8 pb-10">
        <div className="col-start-2 col-span-2 hover:cursor-pointer">
          <Dropdown
            options={Object.keys(cardImages)}
            onSelect={handleDropdownSelect}
            button={<Card title="Device Type" />}
          />
        </div>
        <div className="col-start-4 col-span-2 hover:cursor-pointer">
          <Dropdown
            options={Object.keys(floorImages)}
            onSelect={handleFloorDropdownSelect}
            button={<Card title="Floor" />}
          />
        </div>
        <div className="col-start-1 col-span-6 h-full">
          <Card imageUrl={selectedFloor.image} className="col-span-3" />
        </div>
        <div className="col-span-6 h-full">
          <Card imageUrl={selectedFloor1.image} className="col-span-3" />
        </div>
        <Card
          title="Energy Consumption"
          className="w-full h-full col-span-full"
        >
          <div className="px-4 py-2">
            <BarGraph
              data={sampleData1}
              title="Energy Consumption"
              subtitle={""}
              xAxisTitle={""}
              yAxisTitle="kWh"
              showYAxisTitle
            />
          </div>
        </Card>
        <Card
          title="Light 1"
          imageUrl={selectedCard.image}
          className="col-span-3"
          imgWidth={300}
        >
          <div className="">
            <span className="text-sub1">Performannce:</span>
            <span className="text-body1 ml-2">85%</span>
          </div>
          <div className="">
            <span className="text-sub1">Location:</span>
            <span className="text-body1 ml-2">Eng 3</span>
          </div>
          <div className="mb-4">
            <span className="text-sub1">Run hours:</span>
            <span className="text-body1 ml-2">100 hr</span>
          </div>
          <BarGraph
            data={sampleData}
            title="Energy Consumption"
            subtitle={""}
            xAxisTitle={""}
            yAxisTitle="number of maintained"
            showYAxisTitle
            graphHeight={140}
            graphWidth={340}
          />
        </Card>
        <Card
          title="Light 2"
          imageUrl={selectedCard.image}
          className="col-span-3"
          imgWidth={300}
        >
          <div className="">
            <span className="text-sub1">Performannce:</span>
            <span className="text-body1 ml-2">85%</span>
          </div>
          <div className="">
            <span className="text-sub1">Location:</span>
            <span className="text-body1 ml-2">Eng 3</span>
          </div>
          <div className="mb-4">
            <span className="text-sub1">Run hours:</span>
            <span className="text-body1 ml-2">100 hr</span>
          </div>
          <BarGraph
            data={sampleData}
            title="Energy Consumption"
            subtitle={""}
            xAxisTitle={""}
            yAxisTitle="number of maintained"
            showYAxisTitle
            graphHeight={140}
            graphWidth={340}
          />
        </Card>
        <Card
          title="Light 3"
          imageUrl={selectedCard.image}
          className="col-span-3"
          imgWidth={300}
        >
          <div className="">
            <span className="text-sub1">Performannce:</span>
            <span className="text-body1 ml-2">85%</span>
          </div>
          <div className="">
            <span className="text-sub1">Location:</span>
            <span className="text-body1 ml-2">Eng 3</span>
          </div>
          <div className="mb-4">
            <span className="text-sub1">Run hours:</span>
            <span className="text-body1 ml-2">100 hr</span>
          </div>
          <BarGraph
            data={sampleData}
            title="Energy Consumption"
            subtitle={""}
            xAxisTitle={""}
            yAxisTitle="number of maintained"
            showYAxisTitle
            graphHeight={140}
            graphWidth={340}
          />
        </Card>
        <Card
          title="Light 4"
          imageUrl={selectedCard.image}
          className="col-span-3"
          imgWidth={300}
        >
          <div className="">
            <span className="text-sub1">Performannce:</span>
            <span className="text-body1 ml-2">85%</span>
          </div>
          <div className="">
            <span className="text-sub1">Location:</span>
            <span className="text-body1 ml-2">Eng 3</span>
          </div>
          <div className="mb-4">
            <span className="text-sub1">Run hours:</span>
            <span className="text-body1 ml-2">100 hr</span>
          </div>
          <BarGraph
            data={sampleData}
            title="Energy Consumption"
            subtitle={""}
            xAxisTitle={""}
            yAxisTitle="number of maintained"
            showYAxisTitle
            graphHeight={140}
            graphWidth={340}
          />
        </Card>
      </div>
    </>
  );
}
