import React from "react";
import { Card } from "./Card";
import dynamic from "next/dynamic";
import { PieTextPosition } from "plotly.js/lib/traces/pie";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export interface PieChartData {
  type: "pie";
  values: number[];
  labels: string[];
  hole?: number;
  rotation?: number;
  marker?: {
    colors?: string[];
  };
  textposition?: PieTextPosition[];
}

interface PieChartProps {
  data: PieChartData[];
  title?: string;
  subtitle?: string;
  size?: "sm" | "md";
  consumptionTitle?: string;
  consumptionValue?: number;
  generationTitle?: string;
  generationValue?: number;
  unit?: string;
  className?: string;
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  subtitle,
  size = "md",
  className,
  consumptionTitle,
  consumptionValue,
  generationTitle,
  generationValue,
  unit,
}) => {
  const sizeMap = {
    sm: {
      container: {},
      graph: {
        width: 125,
        height: 125,
        margin: { l: 0, r: 0, b: 0, t: 0 },
        showlegend: false,
        paper_bgcolor: "transparent",
      },
      legend: "text-graph1 font-normal",
      //   consumptionTitle: consumptionTitle.slice(0, 3),
      //   generationTitle: generationTitle.slice(0, 3),
    },
    md: {
      container: {},
      graph: {
        width: 228,
        height: 228,
        margin: { l: 0, r: 0, b: 0, t: 0 },
        showlegend: false,
        paper_bgcolor: "transparent",
      },
      legend: "text-sub2 font-normal",
    },
  };

  return (
    <div className="">
      <div className="">
        <div className="relative flex flex-col items-center justify-between h-fit w-[228px]">
          <div className="relative">
            <Plot
              data={data}
              layout={sizeMap[size]["graph"]}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
