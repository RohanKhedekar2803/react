import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';

const DisplayOne = (props) => {
    
    const navigate = useNavigate();
    const [movies,setMovies]=useState([]);
    const [movie,setMovie]=useState(null);  
    const {id}=useParams();
    const [summery, setSummery] = useState(null)
    
   
    const m= null
    useEffect(() => {
        async function getResponse() {
            const response = await fetch(
                'https://api.tvmaze.com/search/shows?q=all',
                {
                    method: 'GET'
                }
            );
            const data = await response.json(); // Extracting data as a JSON Object from the response
            setMovie(data.filter(ele=>ele.show.id==id)[0])
            console.log(data.filter(ele=>ele.show.id==id)[0])
            setSummery(reduceString(data.show.summary,140))
        }
        getResponse();
     }, [])

     const  reduceString=(str , num)=>{
        if(str?.length > num)return str.slice(3,num)+ '...'
        else return str
      } 

      const book=()=>{
                navigate('/form')
               
      }
        
     
     
  return (
    <div className='pt-16 bg-slate-800 '>
      <div className='w-720 h-[500px]  text-white m-8 flex ml-36' >
           <div className='flex block'>
                <div className='h-[500px] w-[300px]  m-4 '>
                        {movie ? <img className='rounded-2xl mt-4' src={movie.show.image.original }></img> : null}
                </div>

                <div className='mt-6  w-[400px]'>
                    
                    <div className='flex mt-4'>
                        {movie ? <h1 className='font-extrabold text-2xl text-white'> {movie.show.name} </h1> : null}
                        {movie ? <h1 className='ml-2 font-bold text-2xl text-white'> ({movie.show.language}) </h1> : null}
                    </div>
                    <div className='flex mt-2'>
                        <h3 className='text-xl'>Rating : </h3>
                        {movie ? <h3 className='text-xl text-white'> {movie.show.rating.average} </h3> : null}
                        <h3 className='text-xl'>/10 </h3>
                    </div>
                    <div className=' mt-2  text-white bg-slate-900 rounded-2xl mr-50 flex'>
                        <div className='p-4'>
                            
                            {movie ?<h3 className='text-xl  '>Starts @ {movie.show.schedule.time} </h3> : null}
                            {movie ? <h3 className='text-xl  '>Runtime: {movie.show.runtime} min </h3> : null}
                            {movie ?<h3 className='text-xl'>On {movie.show.schedule.days[0]}  </h3> : null}
                        </div>
                        <div className='ml-10'>
                        {movie ?<button className='m-6 bg-slate-300 rounded-lg p-2 my-10 text-black'>Score: {parseInt(movie.score*100)}%</button>:null}
                        </div>
                        
                    </div>
                    <div className='flex mt-4 '>
                        <div className=''> 
                            <div className='flex'>
                                {movie ? <h3 className='text-xl text-white'> {movie.show.genres[0]}  </h3> : null}
                                <p>&nbsp;</p>
                                {movie ? <h3 className='text-xl text-white'> {movie.show.genres[1]} </h3> : null}
                            </div>
                            
                        
                                {movie ? <h3 className='text-xl text-white'>Status: {movie.show.status} </h3> : null}  
                                {movie ? <h3 className='text-xl text-white'>{movie.show.premiered} </h3> : null}
                        </div>                  
                        <div>
                            <button className=' m-4 bg-red-800 p-2 rounded-lg ml-28 mt-6' onClick={book}>Book My Seat</button>
                        </div>

                    </div>
                        {movie ? <h3 className='text-xl text-white mt-2'>Summary :  {reduceString(movie.show.summary,100) }</h3> : null}
                    </div>
                
                
         </div>
      </div>
    </div>
  )
}

export default DisplayOne 