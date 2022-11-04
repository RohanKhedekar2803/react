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
    async function getMovies(){
      const data = await fetch('https://api.tvmaze.com/search/shows?q=all').then((ele)=>{console.log(ele.response)
        return ele.json();
      })
 
      if(data?.data){
        setMovies(data.data)
        console.log(data)
      }
      
    }
    getMovies()
}, [movies])
   
    
   const slideLeft = () => {
    var slider = document.getElementById('slider' + props.rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + props.rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
console.log(movies)
  return (
    <>
        <div className='w-full pt-16 bg-slate-300 h-[500px]'>
            <div className='w-full h-[350px] text-white '>
                 <div className='mt-6 ml-4'>
                       <h1 className='text-black font-bold text-2xl'>Trending movies</h1>
                       
                       <div>
                            <h2 className='text-white font-bold p-4 md:text-xl'>{props.title}</h2> 
                            <div className=' text-white flex items-center group '>
                           
                                <div>
                                 <MdChevronLeft onClick={slideLeft} size={50} className='bg-white/10 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
                                    <div id={'slider'+ props.rowId}  className='overflow-x-scroll bg-black scrollbar-hide whitespace-nowrap  scroll-smooth'>
                                          
                                                 
                                               
                                                    <div className='w-[160px] sm:w-[200px] h-[160px]  md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                                                         {/* <img className='w-full block h-auto hover:opacity-30 text-black'  
                                                                    alt={movie.score} 
                                                                    src={movie.show.image}
                                                                    >
                                                          </img>   */}    
                                        { movies?.map((item)=>{
                                            <h1 className='text-white'>{item.score}000000o</h1> 
                                            {console.log(item.score)} 
                                           })}
                                                            
                                                           {/* <div className='absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
                                                                <p className=' text-xs md:text-sm font-bold flex justify-center  w-full h-full items-center'>{item.score} </p>
                                                                <p>{like?<FaHeart className='absolute top-4 left-4 text-gray-400'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-400'/>}</p>                   
                                                             </div>*/}
                                                     </div>
                                        
                                            
                                            
                                                
                                    </div>
                                <MdChevronRight onClick={slideRight} size={55} className='mr-1 bg-white/10 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
                                </div>
                                </div>
                            
                            
                        </div>
                         
                 </div>
            </div>
        </div>
    </>
    
  )
}

export default Row