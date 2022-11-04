import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useEffect,useState } from 'react';


const Movie = (props) => {
    const [like,setLike]=useState(false);
  return (
    <div className='w-[160px] sm:w-[200px] h-[160px] bg-black md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full block h-auto hover:opacity-30 text-black'  
                    alt={props.item.score} 
                    src={props.item.show.image}
                    >
            </img>       
                             
            <div className='absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
                <p className=' text-xs md:text-sm font-bold flex justify-center  w-full h-full items-center'>{props.item.score} </p>
                <p>{like?<FaHeart className='absolute top-4 left-4 text-gray-400'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-400'/>}</p>                   
            </div>
    </div>
  )
}

export default Movie