// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper';
import { fromJSON } from 'postcss';

// import data
import {testimonial } from '../data'
const TestimonialSlider = () => {
  return (
    <Swiper>
      {testimonial.persons.map((person, index) => {
        // destructuring
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div>
              <div>
                {/* avatar */}
                <img src={avatar.type} alt="" />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider