"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 30,
    absent: 39,
  },
  {
    name: "Wed",
    present: 20,
    absent: 80,
  },
  {
    name: "Thu",
    present: 78,
    absent: 8,
  },
  {
    name: "Fri",
    present: 90,
    absent: 40,
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-full  p-4  bg-white rounded-2xl">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer height={"90%"}>
        <BarChart width={500} height={290} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name"  axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:'10px', borderColor:"lightgray"}} />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="absent" fill="#FAE27C" legendType="circle" radius={[5,5,0,0]} />
          <Bar dataKey="present" fill="#C3EBFA" legendType="circle"radius={[5,5,0,0]} />
        </BarChart>
      </ResponsiveContainer>
      {/* TITLE */}
    </div>
  );
};

export default AttendanceChart;
