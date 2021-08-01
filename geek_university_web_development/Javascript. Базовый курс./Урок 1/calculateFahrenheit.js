/*
* Формула для расчета: Tf = (9 / 5) * Tc + 32;
* где Tf – температура по Фаренгейту,
*     Tc – температура по Цельсию
* */
export const calculateFahrenheit = (temperatureCelsius = 0) => {
    return (9 / 5) * temperatureCelsius + 32;
}
