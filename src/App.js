import { useEffect,useState } from 'react';
import './App.css';
import Properties from './components/Properties';
import { getFormatWeatherData } from './components/FetchData';
import sunny from './Images/bg-1.avif';
import cold from './Images/cold.jpg';


function App() {
  const [city,setCity] = useState('Delhi');
  const[weather,setWeather] = useState(null);
  const [units,setUnits]=useState("imperial");
  const [bg,setBg] = useState(sunny);
  
  
  
  useEffect(()=>{
    const fetchWeatherData = async () => {
      const data = await getFormatWeatherData(city,units);
     setWeather(data);
  
     const threshold = units === 'metric'?20:60 || 'imperial'?60:100;
    if(data.temp<=threshold){
     setBg(cold);
    }else
      setBg(sunny);
     
    };
  fetchWeatherData();
  },[units,city]);
  const handleClick = (e) =>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelcius = currentUnit ==='C';
    // button.innerText = isCelcius ? '°F' : '°C'
    setUnits(isCelcius?'metric':'imperial')
  };
  const enterKeyPressed = (e) =>{
          
         if(e.keyCode === 13 && e.currentTarget.value!==''){
          setCity(e.currentTarget.value);
          // e.currentTarget.blur();
         }
         else if(e.keyCode === 13 && e.currentTarget.value === ''){
          alert('You need to enter the name of city!')
         }
  }
 
  return (
    <div className="absolute top-0 left-0 w-full h-full opacity-80 font-mono top-0 left-0 w-full h-full bg-cover bg-no-repeat " style={{ backgroundImage: `url(${bg})` }}>
      {
        weather && (
          <div>
    
       <div className="flex justify-center text-white items-center cursor-pointer">
     <input onKeyDown = {enterKeyPressed} type="text" name="city" placeholder="Enter city" className='rounded border-white text-20 text-black h-10 m-4 pt-1 pl-6 pr-6 pb-1 ' />
       </div>
       <div  className = "container flex  flex-col bg-black rounded-lg mx-auto inline-block">
       <div className="w-100% pl-44 pt-20">
  <h3 className='text-emerald-50 text-xl'>
    Right Now in <span className="highlight text-white text-3xl font-bold ">{weather.name},</span>
    <span className="highlight text-white text-3xl font-bold">{weather.country}</span> it's {weather.description}
  </h3>
</div>
        <div className=' flex pt-10 items-center justify-center w-100% text-white text-5xl font-light '>
          <img src={weather.iconId} alt="" className=""/>
          <h1>{`${weather.temp.toFixed()}°${units === 'metric'?'C':'F'}`}</h1>
       </div>
      {/* </div> */}
      <Properties weather={weather} unit={units}/>
      <div className='flex flex-row justify-center'>
      <button onClick={(e)=>handleClick(e)}
        className='  pt-16 pb-1 
        bg-black text-white font-bold cursor-pointer '>°F</button>
        <span className='pt-16 cursor-pointer text-white'>|</span>
        <button onClick={(e)=>handleClick(e)}
        className=' pt-16  pb-1 
        bg-black text-white font-bold cursor-pointer '>°C</button>
        </div> 
     </div>
    </div>
      )}; 
     
     </div> 
   
     
    
  );
      }
  


export default App;
