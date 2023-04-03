import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    // console.log(phones.price);

    useEffect(() => {
        // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        // .then(res => res.json())
        // .then(data => setPhones(data))

        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
            .then(data => {
                const lodaData = data.data.data;
                // console.log(lodaData);

                const phoneData = lodaData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                // console.log(phoneData);
                setPhones(phoneData);
            })



    }, [])
    console.log(phones);
    return (
        <div className='mt-24'>
            <h2 className='text-center font-bold text-4xl text-green-500'>This is BarChart</h2>
            <BarChart
                width={1500}
                height={400}
                data={phones}
            >
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default PhoneBar;