import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
// import axios from "axios";




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;





 const Random = ()=> {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  



async function fetchdata (){
  setLoading(true);
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  const {data}= await axios.get(url);
  const imageSource=data.data.images.downsized_large.url;
  // console.log(imageSource);

  // GIF ko set kr rhe URL m

  setGif(imageSource); 
  setLoading(false);
}
 useEffect ( ()=> {
    fetchdata();
 }, [] )



  function clickHandler(){
     
      fetchdata();
  }
  return(
    <div className="w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
     
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
      
      {
        loading ? (<Spinner/>): (  <img src={gif} width="250" alt=""/>)
      }
    
     
      <button onClick={clickHandler}
       className="w-10/12 mb-[20px] bg-yellow-300  opacity-100 p-x-4 rounded-lg">Generate</button>
     
       </div>
  )
 }
 export default Random