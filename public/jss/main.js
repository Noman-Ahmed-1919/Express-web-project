const cityName = document.getElementById('cityName')

const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const tempstatus = document.getElementById("tempstatus")

const datahide = document.querySelector('.middle_layer');


const getInfo = async(event ) => {
    event.preventDefault();
let cityVal = cityName.Value;
    if(cityVal === ""){
city_name.innerText = `plz write the name before search`;
  datahide.classList.add('data_hide');

}else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c8c7c4ee9a4181873129c9a37ee5da3a`;
        const response = await fetch(url);
        const data = await response.json();
    
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        tempstatus.innerText = arrData[0].weather[0].main;

        datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `plz enter the city name propely`; 
            datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener("click", getInfo);