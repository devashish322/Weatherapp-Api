import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';
import img1 from './images/logo.png';

function App() {
const apiKey ="94c8bf15b9726cfe736ed90cd5594845"
const [inputCity,setInputCity] = useState("")
const [data,setData] = useState({})

const getWeatherDetails = (cityName) =>{
  if(!cityName) return
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?lat="+cityName+ "&appid=" + apiKey

  axios.get(apiURL).then((res)=>{
    console.log("response", res.data)

setData(res.data)

  }).catch((err)=>{
    console.log("err", err)
  })
}

const handleChangeInput = (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)

}

const handleSearch = () =>{
getWeatherDetails(inputCity)
}

useEffect(()=>{
getWeatherDetails("delhi")
}, [])


  return (
   <div className="col-md-12">
     <div className="weatherBg">
       <h1 className="heading">Weather app</h1>
       <div className="d-grid gap-3 col-4 mt-4">
       <input type="text" className="form-control"
       value={inputCity}
       onChange={handleChangeInput}/>
       <button className="btn btn-primary" type="button"
       onClick={handleSearch}
       >Search</button>

       </div>
      
     </div>

     <div className="col-md-12 text-center mt-5">
       <div className="shadow rounded weatherResultBox">
         <img className="weatherIcon" src={img1}></img>

         <h5 className="weatherCity">
           {data?.name}
         </h5>
         <h6 className="weatherTemp">{((data.main?.temp)-273.15).toFixed(2)} °C</h6>
       </div>
     </div>
   </div>
  );
}

export default App;
