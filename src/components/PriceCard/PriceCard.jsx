import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='text-center'>
            <h2><span className='text-4xl font-bold'>{price.price}$ </span><span className='text-xl font-semibold'>/month</span></h2>
            <h3 className='text-3xl font-bold'>{price.name}</h3>
            <h4 className='font-semibold'>{price.features}</h4>
        </div>
    );
};

export default PriceCard;