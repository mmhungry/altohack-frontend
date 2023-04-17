// Table.tsx
import React from "react";
import dynamic from "next/dynamic";
import { Data } from "plotly.js";
import { Card } from "./Card";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

interface TableData {
  header: string[];
  data: any[][];
}

interface TableProps {
  tableData: TableData;
}

export const Table: React.FC<TableProps> = ({ tableData }) => {
  const data: Data[] = [
    {
      type: "table",
      header: {
        values: tableData.header.map((value) => `<b>${value}</b>`),
        align: "center",
        line: { color: "white" },
        fill: { color: "white" },
        font: {
          family: "var(--font-be-vietnam)",
          size: 14,
          color: "black",
        },
      },
      cells: {
        values: tableData.data,
        align: "center",
        line: { color: "white" },
        fill: { color: ["#F8FAFC", "white"] },
        font: {
          family: "var(--font-be-vietnam)",
          size: 12,
          color: "black",
        },
      },
    } as Data,
  ];

  const layout = {
    autosize: true,
    margin: {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
    },
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
  };

  return (
    <Card variant="primary">
      <Plot
        data={data}
        layout={layout}
        className="w-full h-full"
        config={{ displayModeBar: false }}
      />
    </Card>
  );
};
