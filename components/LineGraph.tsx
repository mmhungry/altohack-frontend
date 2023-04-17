import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { Card } from "./Card";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export interface LineGraphData {
  x: any[] | Date[] | string[];
  y: number[];
  name: string;
  type: "scatter"; // Change this line
  mode: "lines" | "lines+markers" | "markers";
  marker?: {
    symbol?: "circle";
    color?: string;
    size?: number;
  };
  line?: {
    color?: string;
  };
}
interface CustomTitleProps {
  title: string;
  size: "md" | "lg";
  showXAxisTitle?: boolean;
  showYAxisTitle?: boolean;
}

interface LineGraphProps {
  data: LineGraphData[];
  title: string;
  subtitle: string;
  xAxisTitle: string;
  yAxisTitle: string;
  className?: string;
  size?: "md" | "lg";
  showXAxisTitle?: boolean;
  showYAxisTitle?: boolean;
  xAxis?: {
    title?: string;
    tickFormat?: (d: number) => string;
  };
}

interface CustomLegend {
  data: any[];
}

// Custom legend component
const CustomLegend: FC<CustomLegend> = ({ data }) => (
  <div className="flex items-center justify-center space-x-4 font-normal text-b3 text-altoBlack">
    {data.map((trace, index: number) => (
      <div key={index} className="flex items-center space-x-2">
        <div
          style={{
            backgroundColor:
              trace.mode === "markers" || trace.mode === "lines+markers"
                ? trace.marker?.color || "currentColor"
                : "transparent",
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
  const position = "mb-5 mr-[37px]";
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
  const position = size === "md" ? "ml-6" : "ml-6 mt-1.5";
  return (
    <div
      className={`absolute left-0 top-0 text-center text-b3 text-altoBlack02 ${position}`}
    >
      <span>{title}</span>
    </div>
  );
};

export const LineGraph: React.FC<LineGraphProps> = ({
  data,
  title,
  subtitle,
  xAxisTitle,
  yAxisTitle,
  className,
  size = "md",
  showXAxisTitle = false,
  showYAxisTitle = false,
  xAxis,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    setWidth(ref?.current?.offsetWidth ?? 0);
    setHeight(ref?.current?.offsetHeight ?? 0);
  };

  //Custom size of graph depending on the card container
  useLayoutEffect(() => {
    console.log(ref?.current?.offsetWidth);
    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (ref?.current) {
      resizeObserver.observe(ref?.current);
    }

    return () => {
      if (ref?.current) {
        resizeObserver.unobserve(ref?.current);
      }
    };
  }, []);
  const mdSize = { height: 144 };
  const lgSize = { height: 297 };
  const layout: Partial<Plotly.Layout> = {
    margin: {
      l: 46,
      r: 54,
      t: 15,
      b: 21,
    },
    xaxis: {
      showgrid: false,
      title: xAxisTitle,
      tickformat: "%Y-%m-%d %H:%M:%S",
    },
    yaxis: {
      gridcolor: "#EDEFF9",
      zerolinecolor: "#EDEFF9",
    },
    font: {
      family: "var(--font-be-vietnam)", // Set the font family you've imported in the Tailwind CSS config
      size: 10,
      // weight: 400,
      color: "#788796",
    },
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    showlegend: false,
    // height: 106,
    height: size === "md" ? mdSize.height : lgSize.height,
    width: width,
    // width: size === "md" ? mdSize.width : lgSize.width,
    
  };

  return (
    <Card title={title} subtitle={subtitle} ref={ref} className="">
      <div
        className={`w-full h-full ${className} relative overflow-hidden pr-4`}
      >
        <Plot
          data={data.map((trace) => ({
            ...trace,
            line: { ...trace.line },
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
    </Card>
  );
};