import { list } from 'postcss';
import React from 'react';
import Feature from '../Features/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='text-center p-8 bg-amber-500 rounded flex flex-col'> {/* flex flex-col use kora hoice coloum bora bor and button er possition change korar jnno*/}
            <h2 className='mb-4'><span className='text-4xl font-bold'>{price.price}$ </span><span className='text-xl font-semibold text-white'>/month</span></h2>
            <h3 className='text-3xl font-bold mb-4'>{price.name}</h3>
            <div className='text-left text-xl font-bold'>
                <p className='text-xl font-bold mb-3 underline text-white'>Features:</p>
                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
                <button className='mt-auto bg-green-500 py-2 w-full rounded-md hover:bg-green-600 text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceCard;