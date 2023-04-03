import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h3 className='text-colo text-6xl bg-purple-500 p-3 text-center font-semibold text-white'>Awesome Prices List Here!</h3>
            <div className='grid md:grid-cols-3 gap-4 mt-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;