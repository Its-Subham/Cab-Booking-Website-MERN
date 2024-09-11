import React, { useContext, useState } from 'react';
import all_cars from '../../assets/all_cars';
import { MapContext } from '../../context/MapContext';

const Cars = () => {

  const { distance, selectedCar, setSelectedCar } = useContext(MapContext);
  // const [carData, setCarData] = useState(null);

  // useEffect(() => {
    // const fetchCarData = async () => {
    //   try {
    //     // Send the ID in the URL parameters
    //     const response = await axios.get(`http://localhost:3000/car/get`);
    //     setCarData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching car data', error);
    //   }
    // };

  //   fetchCarData();
  // }, [id]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    console.log(selectedCar);
  }

  return (
    <div className='mt-3'>
      <h2 className='font-semibold mb-2'>Select Car</h2>
      <div className='car-list-container'>
        {all_cars.map((item) => (
          <div 
          key={item.id} 
          className={`mb-3 pl-5 pb-2 pt-2 border-[2px] hover:border-primaryBlue rounded-md cursor-pointer flex justify-around items-center group ${
            selectedCar?.id === item.id ? 'border-primaryBlue' : ''
          }`}
            onClick={() => handleCarSelect(item)}>

            <div className='flex'>
              <img src={item.image} width={150} height={180} alt={item.name} />
              <div>
                <p className='text-[15px] text-primaryGray'>{item.name}</p>
                <p>Cost: ₹{item.cost}/km</p>
                <p>Total Distance: {distance} km</p>
                <p>Total Cost: ₹{Math.round(distance * item.cost)}.00</p>
              </div>
            </div>

            <div className=''>
              <div className='h-5 w-5 bg-white border-2 border-gray-400 group-hover:border-primaryBlue rounded-full flex justify-center items-center'>
                {selectedCar?.id === item.id && (
                  <div className='h-3 w-3 bg-primaryBlue rounded-full'></div>
                )}
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;




// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContext } from '../../context/MapContext';

// const Cars = () => {
//   const { distance, selectedCar, setSelectedCar } = useContext(MapContext);
//   const [carData, setCarData] = useState(null);

//   useEffect(() => {
//     const fetchCarData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/car/get');
//         setCarData(response.data);
//       } catch (error) {
//         console.error('Error fetching car data', error);
//       }
//     };

//     fetchCarData();
//   }, []);

//   const handleCarSelect = (car) => {
//     setSelectedCar(car);
//     console.log(car);  // This will log the selected car
//   };

//   return (
//     <div className='mt-3'>
//       <h2 className='font-semibold mb-2'>Select Car</h2>
//       <div className='car-list-container'>
//         {carData ? (
//           carData.map((item) => (
//             <div
//               key={item.id}
//               className={`mb-3 pl-5 pb-2 pt-2 border-[2px] hover:border-primaryBlue rounded-md cursor-pointer flex justify-around items-center group ${
//                 selectedCar?.id === item.id ? 'border-primaryBlue' : ''
//               }`}
//               onClick={() => handleCarSelect(item)}
//             >
//               <div className='flex'>
//                 <img src={item.image} width={150} height={180} alt={item.name} />
//                 <div>
//                   <p className='text-[15px] text-primaryGray'>{item.name}</p>
//                   <p>Cost: ₹{item.cost}/km</p>
//                   <p>Total Distance: {distance} km</p>
//                   <p>Total Cost: ₹{Math.round(distance * item.cost)}.00</p>
//                 </div>
//               </div>
//               <div className=''>
//                 <div className='h-5 w-5 bg-white border-2 border-gray-400 group-hover:border-primaryBlue rounded-full flex justify-center items-center'>
//                   {selectedCar?.id === item.id && (
//                     <div className='h-3 w-3 bg-primaryBlue rounded-full'></div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading cars...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cars;
