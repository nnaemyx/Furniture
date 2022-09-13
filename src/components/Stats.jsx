import React from 'react';

// import data
import {stats} from '../data'

const Stats = () => {
  return (
    <div className='bg-accent lg:ml-[3.5rem] lg:max-w-[90%] p-12 lg:mt-[-4rem] rounded-[20px]'>
      <div className="flex flex-wrap gap-y-8">
        {stats.map((item, index) => {
          return (
            <div className="min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none" key={index}>
              <div className="text-2xl font-semibold lg:text-4xl">{item.value}</div>
              <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>{ item.text }</div>
            </div>
          )
        })}
      </div>
    </div>
  )
 
  
};

export default Stats;
