const temperature = 31;
const windSpeed = 8;

const calculateWindChill = (temp, speed) =>{
    const windChill = 13.12 + 0.6215 * temp - 11.37 * speed** 0.16 + 0.3965 * temp * speed ** 0.16
    if( temp <= 10 ){
        return windChill.toFixed(2);

    }
    else{
        return 'N/A'
    }
}
document.querySelector('#wind-chill').textContent = calculateWindChill(temperature, windSpeed);