import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
        { id: 1, name: "John", math: 80, physics: 75, chemistry: 90 },
        { id: 2, name: "Sarah", math: 60, physics: 70, chemistry: 80 },
        { id: 3, name: "Alex", math: 90, physics: 85, chemistry: 95 },
        { id: 4, name: "Emily", math: 70, physics: 65, chemistry: 80 },
        { id: 5, name: "David", math: 85, physics: 80, chemistry: 75 },
        { id: 6, name: "Rachel", math: 65, physics: 75, chemistry: 70 },
        { id: 7, name: "Michael", math: 75, physics: 80, chemistry: 85 },
        { id: 8, name: "Sophia", math: 80, physics: 90, chemistry: 95 },
        { id: 9, name: "Peter", math: 70, physics: 75, chemistry: 80 },
        { id: 10, name: "Olivia", math: 95, physics: 90, chemistry: 85 },
        { id: 11, name: "Emma", math: 85, physics: 80, chemistry: 90 },
        { id: 12, name: "Daniel", math: 75, physics: 70, chemistry: 65 }
    ];

    return (
        <div>
            <LineChart
                width={1450}
                height={400}
                data={students}
            >
                <Line dataKey="physics" stroke="#8884d8"></Line>
                <Line dataKey="math" stroke="#82ca9d"></Line>
                <Line dataKey="chemistry" stroke="red"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;