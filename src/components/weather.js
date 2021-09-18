import React, { useEffect, useState } from "react";
import  "./weather-styles.css"

const handlechange =()  =>{
    console.log("hello");
}
const Weather = () =>{
      const [city,setCity]=useState(null);
      const [search,setSearch]=useState("Mumbai")

      useEffect (()=>{

        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c330fc44a97066547ea044f31c873fde`;

        const fetchData=async()=>{
          try{
            const response=await fetch(url);
            const jsonData=await response.json();
            setCity(jsonData.name);
          }catch(error){
            console.log(error);
          }
        };

        fetchData();
        
      },[]);

    return (
     <div className="box">
        <div className="inputData"> 
        <input type="search" className="inputField" onChange={handlechange}/>   
        
     </div>
     <div className="info"> 
       <h2 className="location">
     <i className="fas fa-street-view">{city}</i> 
       </h2>
       <h1 className="temp">
       </h1>
       <h3 className="tempmin_max"> </h3>
     </div>
     <div className="wave -one">  </div>
     <div className="wave -one">  </div>
     <div className="wave -one">  </div>
     </div>
    
    );
}


export default Weather;