import React, { useEffect, useState } from "react";
import  "./weather-styles.css"


const Weather = () =>{
      const [city,setCity]=useState(null);
      const [search,setSearch]=useState("Dehradun");
      const [icon,setIcon]=useState(null);

      useEffect (()=>{

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c330fc44a97066547ea044f31c873fde`;

        const fetchData=async()=>{
          try{
            const response=await fetch(url);
            const jsonData=await response.json();
            setCity(jsonData.main);
            setIcon(jsonData.weather[0].icon);
            
          }catch(error){
            console.log(error);
          }
        };

        fetchData();
        
      },[search]);

     
      const handlechange=(event)=>{
        setSearch(event.target.value);
      }

    return (
     <div className="box">
        <div className="inputData"> 
        <input type="search" value={search} className="inputField" onChange={handlechange}/>     
     </div>
     {!city?(
       <p className="errorMsg">NO Data Found</p>  
     ):(<div> 
    <div className="info"> 
      {!icon?null:(<h2 >
         <img className="icon" alt="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
       </h2>)
       }
       
       <h2 className="location">
        <i className="fas fa-street-view"></i> {search}
       </h2>
       <h1 className="temp">
         {city.temp}°C
       </h1>
       <h3 className="tempmin_max"> Min : ${city.temp_min}°C || Max : ${city.temp_max}°C </h3>
     </div>

     <div className="wave -one">  </div>
     <div className="wave -one">  </div>
     <div className="wave -one">  </div>
     </div>)}
     
     </div>
    
    );
}


export default Weather;
