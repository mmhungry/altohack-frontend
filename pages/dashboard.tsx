import React, { useState, useRef } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { BarGraph, BarGraphData } from "@/components/BarGraph";
import { PieChart, PieChartData } from "@/components/PieChart";
import { LineGraph, LineGraphData } from "@/components/LineGraph";
import BalanceGauge from "@/assets/icons/balancegauge.svg";

// Add sample data for the BarGraph
const electricityUsageData: BarGraphData[] = [
  {
    x: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    y: [
      9, 10, 8, 11, 7, 20, 43, 65, 201, 352, 455, 551, 589, 611, 601, 594, 532,
      119, 63, 35, 17, 8, 12, 9,
    ],
    name: "Electricity Usage",
    type: "bar",
    marker: {
      color: "#D98B76",
    },
  },
];

const weeklyElectricityUsageData: BarGraphData[] = [
  {
    x: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    y: [12500, 11800, 12800, 13300, 13800, 14200, 13700],
    name: "Electricity Usage",
    type: "bar",
    marker: {
      color: "#D98B76",
    },
  },
];

const monthlyElectricityUsageData: BarGraphData[] = [
  {
    x: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    y: [
      125087, 113076, 138995, 134550, 152895, 141255, 146752, 146752, 134550,
      131548, 121005, 125087,
    ],
    name: "Monthly Electricity Usage",
    type: "bar",
    marker: {
      color: "#D98B76",
    },
  },
];
const yearlyElectricityUsageData:BarGraphData[] = [
  {
    x: [ "2019", "2020", "2021", "2022", "2023"],
    y: [1865902, 1565902, 65902, 1565902, 52196],
    type: "bar",
    name: "Yearly Data",
    marker: {
      color: "#D98B76",
    },
  },
];

const electricityUsageData1: BarGraphData[] = [
  {
    x: ["11:00", "12:00", "13:00", "14:00", "15:00"],
    y: [551, 589, 611, 601, 594],
    name: "Electricity Usage",
    type: "bar",
    marker: {
      color: "#D98B76",
    },
  },
];

const weeklyElectricityUsageData1: BarGraphData[] = [
  {
    x: ["Thursday", "Friday", "Saturday"],
    y: [13300, 13800, 14200],
    name: "Electricity Usage",
    type: "bar",
    marker: {
      color: "#D98B76",
    },
  },
];

const monthlyElectricityUsageData1: BarGraphData[] = [
  {
    x: ["June", "July", "August"],
    y: [141255, 146752, 146752],
    name: "Monthly Electricity Usage",
    type: "bar",
    marker: {
      color: "#D98B76",
    },
  },
];

const pieChartData: PieChartData[] = [
  {
    type: "pie",
    values: [88050, 26351],
    labels: ["Generation", "Consumption"],
    hole: 0.4,
    rotation: 90,
    marker: {
      colors: ["#692F32", "#D98B76"],
    },
    textposition: ["inside", "inside"],
  },
];
const pieChartData1: PieChartData[] = [
  {
    type: "pie",
    values: [46378, 6378],
    labels: ["Accumulated Carbon Emitted", "Saved Carbon"],
    hole: 0.4,
    rotation: 0,
    marker: {
      colors: ["#D98B76", "#692F32"],
    },
    textposition: ["inside", "inside"],
  },
];

const pieChartData2: PieChartData[] = [
  {
    type: "pie",
    values: [308175, 6175],
    labels: ["cost", "saved"],
    hole: 0.4,
    rotation: 0,
    marker: {
      colors: ["#D98B76", "#692F32"],
    },
    textposition: ["inside", "inside"],
  },
];

export default function DashboardPage() {
  const [selectedTime, setSelectedTime] = useState("Day");
  const [selectedTime1, setSelectedTime1] = useState("Day");

  const [graphData, setGraphData] = useState(electricityUsageData);
  const [graphData1, setGraphData1] = useState(electricityUsageData1);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (time === "Week") {
      setGraphData(weeklyElectricityUsageData);
    } else if (time === "Month") {
      setGraphData(monthlyElectricityUsageData);
    } else if (time === "Year") {
      setGraphData(yearlyElectricityUsageData);
    } else {
      setGraphData(electricityUsageData);
    }
  };

  const handleTimeSelect1 = (time: string) => {
    setSelectedTime1(time);
    if (time === "Week") {
      setGraphData1(weeklyElectricityUsageData1);
    } else if (time === "Month") {
      setGraphData1(monthlyElectricityUsageData1);
    } else if (time === "Year") {
      setGraphData1(yearlyElectricityUsageData);
    } else {
      setGraphData1(electricityUsageData1);
    }
  };

  const timeOptions = ["Day", "Week", "Month", "Year"];
  const peakConsumptionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-12 grid-flow-row gap-2 px-8 py-5 pb-10">
      <span className="col-span-6 row-span-full">
        <Card title="Energy Consumption" className="w-full h-full">
          <div className="px-4 py-2">
            <BarGraph
              data={graphData}
              title="Energy Consumption"
              subtitle=""
              xAxisTitle={`Time (${selectedTime})`}
              yAxisTitle="kWh"
              showYAxisTitle
              showXAxisTitle
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
          <Card
            title="Energy Consumption and Generation"
            className="w-full h-full pt-4 px-4 pb-6"
          >
            <span className="grid grid-cols-4 my-4">
              <div className="col-span-1 flex flex-col justify-center items-center mt-8 mr-2 text-brown_main ">
                <span className="text-sub2">Consumption:</span>
                <span className="text-b2">88,050 kWh</span>
              </div>

              <div className="flex col-span-2 flex-col justify-center items-center mt-10">
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
                <span className="text-sub1">April</span>
                <span className="text-b1">avg. per Month</span>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center mt-10 mr-2 text-brown_light">
                <span className="text-sub2">Generation:</span>
                <span className="text-b2">26,351 kWh</span>
              </div>
            </span>
          </Card>
        </span>
        <span className="col-span-3">
          <Card
            title="Accumulated Carbon Emission"
            className="w-full h-full pt-4 px-4 pb-6"
          >
            <span className="grid grid-cols-4 my-4">
              <div className="col-span-1 flex flex-col justify-center items-center mt-24 mr-2 text-brown_main ">
                <span className="text-sub2">Saved Carbon:</span>
                <span className="text-b2">6,378 kg CO2</span>
              </div>

              <div className="flex col-span-2 flex-col justify-center items-center mt-[70px]">
                <PieChart
                  data={pieChartData1}
                  title="Energy Usage"
                  subtitle="Generation vs Consumption"
                  size="sm"
                  consumptionTitle="Consumption"
                  consumptionValue={60}
                  generationTitle="Generation"
                  generationValue={40}
                  unit="kWh"
                />
                <span className="text-cap2">2023-01-01 to 2024-01-01</span>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center mt-24 mr-2 text-brown_light">
                <span className="text-sub2 ml-2">
                  Accumulated Emitted Carbon:
                </span>
                <span className="text-b2">46,378 kg CO2</span>
              </div>
            </span>
          </Card>
        </span>
        <span className="col-span-6">
          <Card title="Cost" className="w-full h-full px-8 py-5 pb-10">
            <div className="grid grid-cols-4 ">
              <div className="col-span-2 flex flex-col justify-center items-center">
                <PieChart
                  data={pieChartData2}
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
              <div className="col-span-2 flex flex-col">
                <div>
                  <span className="text-sub2 mr-2">Saved cost</span>
                  <span className="text-b2">6,175 THB.</span>
                </div>
                <div>
                  <span className="text-sub2 mr-2">April total cost:</span>
                  <span className="text-b2">308,175 THB.</span>
                </div>
                <div>
                  <span className="text-b2 text-alert_red">
                    23% increased from last month
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </span>
      </span>
      <span className="col-span-6">
        <Card title="Peak Consumption" className="w-fit h-fit px-8 py-5 pb-10">
          <div className="px-4 py-2 m-[-10px]">
            <BarGraph
              data={graphData1}
              title="Energy Consumption"
              subtitle={`Per ${selectedTime1}`}
              xAxisTitle={`Time (${selectedTime1})`}
              yAxisTitle="kWh"
              showYAxisTitle
              showXAxisTitle
              graphHeight={200}
              graphWidth={630}
            />
            <span className="flex justify-end">
              <Dropdown
                options={timeOptions}
                onSelect={handleTimeSelect1}
                button={
                  <Button variant="primary" size="lg">
                    {selectedTime1}
                  </Button>
                }
              />
            </span>
          </div>
        </Card>
      </span>
      <span className="col-span-6">
        <Card
          title="energy performance indicator"
          className="w-full h-full px-8 py-5 pb-10"
        >
          <div className="px-4 py-2">
            <img
              className="w-fit h-fit mt-10"
              src={BalanceGauge.src}
              alt="balance gauge"
            />
          </div>
        </Card>
      </span>
      <span className="col-span-full">
        <Card
          title="comparative data"
          className="w-full h-full px-8 py-5 pb-10"
        >
          <div className="px-4 py-2 grid grid-cols-2">
            <div className="col-span-1 flex flex-col">
              <span className="text-sub1 mr-2">
                Faculty of Engineering Chulalongkorn University:
              </span>
              <span className="text-sub2 mr-2">EUI:</span>
              <span className="text-b2">
                80-200 kWh per square meter per year
              </span>
              <span className="text-sub2 mr-2">
                Carbon Emissions Intensity:
              </span>
              <span className="text-b2"> 0.50 kg CO2 equivalent per kWh</span>
              <span className="text-sub2 mr-2">
                On-site Renewable Energy Generation:
              </span>
              <span className="text-b2">23%</span>
              <span className="text-sub2 mr-2">Energy Performance Rating:</span>
              <span className="text-b2">B</span>
              <span className="text-sub2 mr-2">Water Use Intensity:</span>
              <span className="text-b2">0.8 m³/m²/year </span>
              <span className="text-sub2 mr-2">
                Waste Reduction and Recycling:
              </span>
              <span className="text-b2">
                Total waste generated per year: 120 metric tons
              </span>
              <span className="text-b2">
                Recycled waste: 72 metric tons (60%){" "}
              </span>
              <span className="text-b2">
                Composted waste: 12 metric tons (10%){" "}
              </span>
              <span className="text-b2">
                Waste diverted from landfill: 84 metric tons (70%)
              </span>
              <span className="text-b2">
                Waste sent to landfill: 36 metric tons (30%)
              </span>
              <span className="text-sub2 mr-2">IEQ:</span>
              <span className="text-b2">
                Air Quality: Maintain CO2 levels below 1000 ppm (parts per
                million) in occupied spaces.
              </span>
              <span className="text-b2">
                Thermal Comfort: Maintain indoor temperature between 23°C to
                26°C (73.4°F to 78.8°F) and relative humidity between 40% to
                60%.
              </span>
              <span className="text-b2">
                Lighting: Provide an average illuminance of 300 lux to 500 lux
                in classrooms, and 500 lux in offices and other workspaces.
              </span>
            </div>
            <div className="col-span-1 flex flex-col">
              <span className="text-sub1 mr-2">Commercial Building</span>
              <span className="text-sub2 mr-2">EUI:</span>
              <span className="text-b2">
                80-200 kWh per square meter per year
              </span>
              <span className="text-sub2 mr-2">
                Carbon Emissions Intensity:
              </span>
              <span className="text-b2"> 0.50 kg CO2 equivalent per kWh</span>
              <span className="text-sub2 mr-2">
                On-site Renewable Energy Generation:
              </span>
              <span className="text-b2">23%</span>
              <span className="text-sub2 mr-2">Energy Performance Rating:</span>
              <span className="text-b2">B</span>
              <span className="text-sub2 mr-2">Water Use Intensity:</span>
              <span className="text-b2">0.8 m³/m²/year </span>
              <span className="text-sub2 mr-2">
                Waste Reduction and Recycling:
              </span>
              <span className="text-b2">
                Total waste generated per year: 120 metric tons
              </span>
              <span className="text-b2">
                Recycled waste: 72 metric tons (60%){" "}
              </span>
              <span className="text-b2">
                Composted waste: 12 metric tons (10%){" "}
              </span>
              <span className="text-b2">
                Waste diverted from landfill: 84 metric tons (70%)
              </span>
              <span className="text-b2">
                Waste sent to landfill: 36 metric tons (30%)
              </span>
              <span className="text-sub2 mr-2">IEQ:</span>
              <span className="text-b2">
                Air Quality: Maintain CO2 levels below 1000 ppm (parts per
                million) in occupied spaces.
              </span>
              <span className="text-b2">
                Thermal Comfort: Maintain indoor temperature between 23°C to
                26°C (73.4°F to 78.8°F) and relative humidity between 40% to
                60%.
              </span>
              <span className="text-b2">
                Lighting: Provide an average illuminance of 300 lux to 500 lux
                in classrooms, and 500 lux in offices and other workspaces.
              </span>
            </div>
          </div>
        </Card>
      </span>
    </div>
  );
}
