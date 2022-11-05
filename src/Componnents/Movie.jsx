import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useEffect,useState } from 'react';
import DisplayOne from './DisplayOne';
import { useNavigate } from 'react-router-dom'

const Movie = (props) => {
    const [like,setLike]=useState(false);
    const navigate = useNavigate();
    

    const opennew =()=>{

        const id=props.item.show.id
        navigate(`/show/${props.item.show.id}`)
        
    }
  return (
    <div onClick={opennew} className='w-[160px] sm:w-[200px] h-max bg-black md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative ml-8'>
            <img className='w-full block h-auto hover:opacity-30 text-black rounded-sm '   
                    alt={props.item.score} 
                    src={props.item.show.image.medium}
                    
                    >
            </img>       
                             
            <div className='absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
                <p className=' text-xs md:text-sm font-bold flex justify-center  w-full h-full items-center'>{props.item.score} </p>
                <p>{like?<FaHeart className='absolute top-4 left-4 text-gray-400'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-400'/>}</p>                   
            </div>
            <div >
                <p className='ml-12'>{props.item.show.name}</p>
            </div>
            
            
    </div>
  )
}

export default Movie