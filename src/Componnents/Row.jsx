import React from 'react'
import Movie from './Movie'
import { MdChevronLeft , MdChevronRight} from 'react-icons/md'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useEffect,useState } from 'react';

const Row = (props) => {
    const [like,setLike]=useState(false);
    const [movies,setMovies]=useState([]);
    const [movie,setMovie]=useState(null);  
    const [loading, setloading] = useState(true)
    
 
     useEffect(() => {
        async function getResponse() {
            const response = await fetch(
                'https://api.tvmaze.com/search/shows?q=all',
                {
                    method: 'GET'
                }
            );
            const data = await response.json(); // Extracting data as a JSON Object from the response
            setMovies(data)
            setMovie(data[0])
        }
        getResponse();
     }, [])
     

    // console.log(movie)
    
    
   const slideLeft = () => {
    var slider = document.getElementById('slider' + props.rowId);
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + props.rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
   if(movies){
    console.log(movies)
   }
  return (
    <>
        <div className='bg-black pt-16'>
            <h2 className='text-white font-bold p-4 md:text-2xl pl-8'>Trending</h2>
            <div className=' text-white flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={50} className='bg-white/10 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
                <div id={'slider'+ props.rowId}  className='overflow-x-scroll  scrollbar-hide whitespace-nowrap  scroll-smooth'>
                    { movies.map((item,id)=>(
                        <Movie item={item} key={id} />
                    ))}  
                    
                </div>
                <MdChevronRight onClick={slideRight} size={55} className='mr-1 bg-white/10 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            </div>
        </div>   
    </>
    
  )
}

export default Row