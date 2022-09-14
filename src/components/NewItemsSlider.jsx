// import React from 'react';

// // import swiper react

// import { Swiper, SwiperSlide } from 'swiper/react';

// // impoer swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import data
// import {newInStore} from '../data'



// const NewItemsSlider = () => {
//   return (

//     <Swiper>
//       {newInStore.products.map((product, index) => {
//         return (
//           <SwiperSlide key={index}>
//             <div>
//               <img src={product.image.type} alt="" />
//             </div>
//           </SwiperSlide>
//         )
//       })}
//     </Swiper>
//   );
// };

// export default NewItemsSlider;


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {Pagination } from 'swiper';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import data
// import { newInStore } from '../data';

// const NewItemsSlider = () => {
//   return (
//     <Swiper
//       grabCursor={true}
//       breakpoints={{
//         320: {
//           slidesPerView: 2,
//           spaceBetween: 18,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 20,
//         },
//       }}
//       className='mySwiper'
//       modules={[Pagination]}
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       {newInStore.products.map((product, index) => {
//         return (
//           <SwiperSlide className='max-w-[265px]' key={index}>
//             <div className='relative'>
//               <img src={product.image.type} alt='' />
//               <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
//                 {product.name}
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default NewItemsSlider;

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { newInStore } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className='mySwiper'
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className='max-w-[265px]' key={index}>
            <div className='relative'>
              <img src={product.image.type} alt='' />
              <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default swiper;