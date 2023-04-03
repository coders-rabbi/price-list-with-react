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
        <div>
            <BarChart
                width={1500}
                height={400}
                data={phones}
            >
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>

        </div>
    );
};

export default PhoneBar;