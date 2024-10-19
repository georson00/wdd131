const temperature = 31;
const windSpeed = 8;
document.querySelector('#wind-chill').textContent = 'N/A'

const calculateWindChill = (temp, speed) =>{
    const windChill = 13.12 + 0.6215 * temp - 11.37 * speed** 0.16 + 0.3965 * temp * speed ** 0.16
        return windChill.toFixed(2);
    
}
if( temperature <= 10){
document.querySelector('#wind-chill').textContent = calculateWindChill(temperature, windSpeed);}
