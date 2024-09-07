"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Boy's",
    count: 100,
    fill: "white",
  },
  {
    name: "Boy's",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Girl's",
    count:50,
    fill: "#C3EBFA",
  },

  
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default class CountChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg";

  render() {
    return (
      <div className=" bg-white rounded-xl p-4 h-full w-full">
        {/* TITLE */}
        <div className="flex justify-between items-center ">
          <h1 className="text-lg font-semibold">Students</h1>
          <Image src={"/moreDark.png"} alt="" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="w-full h-[75%] relative">
          {" "}
          <ResponsiveContainer >
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar
                // minAngle={15}
                // label={{ position: "insideStart", fill: "#fff" }}
                background
                // clockWise
                dataKey="count"
              />
              {/* <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
              /> */}
            </RadialBarChart>
          </ResponsiveContainer>
          <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={'/maleFemale.png'} alt="" width={50} height={50}/>
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16 ">
          <div className="flex flex-col gap-1 items-center">
            <div className=" bg-lamaYellow rounded-full w-5 h-5"></div>
            <h1 className="font-bold ">1,234</h1>
            <h2 className="text-sm text-gray-300">Boy's (55%)</h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className=" bg-lamaYellow rounded-full w-5 h-5"></div>
            <h1 className="font-bold ">1,234</h1>
            <h2 className="text-sm text-gray-300">Girl's (45%)</h2>
          </div>
        </div>
      </div>
    );
  }
}
