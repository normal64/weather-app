const apikey = "3265874a2c77ae4a04bb96236a642d2f";
let city ;
//vars for display data
let got_the_temp =  document.querySelector(".the-temp");
let got_weather__data__city = document.querySelector(".weather__data__city");
let got_weather__icon__image  = document.querySelector(".weather__icon__image");
let got_weather__data__description = document.querySelector(".weather__data__description");
let got_weather__data__description__detailed = document.querySelector(".weather__data__description__detailed");

// const url = (city) =>
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const weather = async () => {
   let url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    try{
        const res   = await fetch(url, { origin: "cors" });
        const data = await  res.json();
        console.log(`data`, data);
        return  data;
        }   catch(err){
            console.log(`err`, err);
        }
        console.log(`end of weather async is her`);
        // further();
};
function further(){
    console.log(`FUrTHER IS ONGOING`);
   return weather().then(data =>  displayData(data));
}

function displayData(props){
    console.log(`props`, props);
    let got_the_temp =  document.querySelector(".the-temp");
    got_the_temp.innerHTML  =  (props.main.temp  - 273.1).toFixed(2) + "&#8451; ";  
    got_weather__data__city.innerHTML = props.name;
    got_weather__icon__image.src  = `https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
    got_weather__data__description.innerHTML  = props.weather[0].main;
    got_weather__data__description__detailed.innerHTML  = props.weather[0].description;

}

const form = document.getElementById('input-for-city');
form.addEventListener('focusin', (event) => {
  form.value  = "";
  event.target.style.background = 'pink';
});
form.addEventListener('focusout', (event) => {
  event.target.style.background = '';
  city = form.value;
  further();
  // weather(city);
});