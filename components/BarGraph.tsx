import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { Card } from "./Card";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export interface BarGraphData {
  x: string[];
  y: number[];
  name: string;
  type: "bar";
  marker?: {
    color?: string;
    line?: {
      color?: string;
      width?: number;
    };
  };
}

interface CustomTitleProps {
  title: string;
  size: "md" | "lg";
  showXAxisTitle?: boolean;
  showYAxisTitle?: boolean;
}

interface BarGraphProps {
  data: BarGraphData[];
  title: string;
  subtitle: string;
  xAxisTitle: string;
  yAxisTitle: string;
  className?: string;
  size?: "md" | "lg";
  showXAxisTitle?: boolean;
  showYAxisTitle?: boolean;
  //   selectedTime: string;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const BarGraph: React.FC<BarGraphProps> = ({
  data,
  title,
  subtitle,
  xAxisTitle,
  yAxisTitle,
  className,
  size = "md",
  showXAxisTitle = false,
  showYAxisTitle = false,
  //   selectedTime,
  containerRef,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  //Custom size of graph depending on the card container
  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef && containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
        setHeight(containerRef.current.offsetHeight);
      }
    };
    console.log(containerRef);

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [containerRef]);

  const mdSize = { height: 144 };
  const lgSize = { height: 297 };
  const layout: Partial<Plotly.Layout> = {
    barmode: "group" as "group",
    margin: {
      l: 30,
      r: 30,
      t: 15,
      b: 21,
    },
    xaxis: {
      showgrid: false,
    },
    yaxis: {
      gridcolor: "#EDEFF9",
      zerolinecolor: "#EDEFF9",
    },
    font: {
      family: "var(--font-be-vietnam)",
      size: 10,
      color: "#788796",
    },
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    showlegend: false,
    height: height,
    width: width,
    bargap: 0.01,
    bargroupgap: 0.1,
  };
  interface CustomLegendProps {
    data: BarGraphData[];
  }
  // Custom legend component
  const CustomLegend: React.FC<CustomLegendProps> = () => (
    <div className="flex items-center justify-center space-x-10 font-normal text-b3 text-altoBlack">
      {data.map((trace, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div
            style={{
              backgroundColor: trace.marker?.color || "currentColor",
              borderColor: "currentColor",
              borderWidth: "0",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              borderStyle: "solid",
            }}
          ></div>
          <span>{trace.name}</span>
        </div>
      ))}
    </div>
  );
  // Custom X-Axis Title component
  const CustomXAxisTitle: React.FC<CustomTitleProps> = ({
    title,
    size,
    showXAxisTitle,
  }) => {
    if (!showXAxisTitle) return null;
    const position = size === "md" ? "mb-5 mr-8" : "mb-5 mr-8";
    return (
      <div
        className={`absolute bottom-0 right-0 text-center text-b3 text-altoBlack02 ${position}`}
      >
        <span>{title}</span>
      </div>
    );
  };

  // Custom Y-Axis Title component
  const CustomYAxisTitle: React.FC<CustomTitleProps> = ({
    title,
    size,
    showYAxisTitle,
  }) => {
    if (!showYAxisTitle) return null;
    const position = size === "md" ? "ml-2.5" : "ml-2";
    return (
      <div
        className={`absolute left-0 top-0 text-center text-b3 text-altoBlack02 ${position}`}
      >
        <span>{title}</span>
      </div>
    );
  };

  return (
      <div className={`w-fit h-fit ${className} relative`}>
        <Plot
          data={data.map((trace) => ({
            ...trace,
            marker: { ...trace.marker },
          }))}
          layout={layout}
          className="w-fit h-fit"
          config={{ displayModeBar: false }}
        />
        <div className="pt-2">
          <CustomLegend data={data} />
        </div>
        <CustomXAxisTitle
          //   title={`Time (${selectedTime})`}
          title={xAxisTitle}
          size={size}
          showXAxisTitle={showXAxisTitle}
        />
        <CustomYAxisTitle
          title={yAxisTitle}
          size={size}
          showYAxisTitle={showYAxisTitle}
        />
      </div>
  );
};
