import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './SimpleBarChart.scss';

const data = [
  { name: 'Page A', view: 4000, user: 2400, amt: 2400 },
  { name: 'Page B', view: 3000, user: 1398, amt: 2210 },
  { name: 'Page C', view: 2000, user: 9800, amt: 2290 },
  { name: 'Page D', view: 2780, user: 3908, amt: 2000 },
  { name: 'Page E', view: 1890, user: 4800, amt: 2181 },
  { name: 'Page F', view: 2390, user: 3800, amt: 2500 },
  { name: 'Page G', view: 3490, user: 4300, amt: 2100 },
];

const SimpleBarChart = () => {
  return (
    <div className="container">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="user" fill="#f03e3e" />
          <Bar dataKey="view" fill="#fab005" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
