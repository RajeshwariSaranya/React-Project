import React, { useState } from "react";
import "./Home.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // State to store details of the selected card
  const [selectedItem, setSelectedItem] = useState(null);

  // Action functions for the cards
  const handleGoldClick = () => {
    console.log("Gold card clicked");
    setSelectedItem("Gold");
    alert("You clicked the Gold card. More info can be shown here.");
    // You can replace this with more complex logic
  };

  const handleTomatoClick = () => {
    console.log("Tomato card clicked");
    setSelectedItem("Tomato");
    alert("You clicked the Tomato card. More info can be shown here.");
    // Replace with your desired action, like showing a modal
  };

  const handleDieselClick = () => {
    console.log("Diesel card clicked");
    setSelectedItem("Diesel");
    alert("You clicked the Diesel card. More info can be shown here.");
    // Replace with your desired action, like updating the UI with more info
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card" onClick={handleGoldClick}>
          <div className="card-inner">
            <h3>GOLD</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>7359</h1>
        </div>
        <div className="card" onClick={handleTomatoClick}>
          <div className="card-inner">
            <h3>TOMATO</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>70</h1>
        </div>
        <div className="card" onClick={handleDieselClick}>
          <div className="card-inner">
            <h3>DIESEL</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>100</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Example of showing selected item */}
      <div className="selected-item-info">
        {selectedItem && <p>You have selected: {selectedItem}</p>}
      </div>
    </main>
  );
}

export default Home;
