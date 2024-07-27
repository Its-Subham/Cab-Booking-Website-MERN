import React from 'react';

const CarCard = ({ item }) => {
  return (
    <div className='p-3'>
      <div className="card bg-base-100 shadow-xl border border-black h-80">
        <figure className='h-52'>
          <img className='bg-white pt-3'
            src={item.image}
            alt="car"
          />
        </figure>
        <div className="card-body ">
          <h2 className='font-semibold font-sans'>
            {item.name}
          </h2>
          <p className='text-gray-500 text-opacity-40 text-sm '>Chevrolet</p>
          <div className=" flex justify-between">
            <a className=" btn_square_primaryBlue rounded-md ">Book Now</a>
            <a className=' btn_square_primaryGreen rounded-md '>Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
