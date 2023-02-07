function attachEventsListeners() {
// взимам всички инпут полета, за да можем да ползваме информацията в тях
    let days = document.getElementById('days'); 
    let hours = document.getElementById('hours'); 
    let minutes = document.getElementById('minutes'); 
    let seconds = document.getElementById('seconds'); 

    // правим обект, който да съдържа данните, които ще ползваме за изчисленията
    let rations = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    }

// слагам iventListener на всички бутони  ---- при click, да се случи нещо, като събитиeto e изписанo във функцията по-долу
document.getElementById('daysBtn').addEventListener('click', onConvert);
document.getElementById('hoursBtn').addEventListener('click', onConvert);
document.getElementById('minutesBtn').addEventListener('click', onConvert);
document.getElementById('secondsBtn').addEventListener('click', onConvert);

// функция за конвертиране
    function convert(value, unit){
        let days = value / rations[unit];// създаваме променлива, която на база своя unit ще взима данните от обекта
        
        return {
            days:days,
            hours:days*rations.hours,
            minutes:days*rations.minutes,
            seconds:days*rations.seconds
        }
    }

// правим функцията, която ще изчислява
    function onConvert(event){
        // взимаме value на полетата, където може да се напише нещо
        let input = event.target.parentElement.querySelector('input[type="text"]'); // селектираме по type text
        
        // извикваме функцията, която имаме горе convert, като й даваме като първи параметър инпута от полето, а второто нещо е самия unit (days, hours, minutes, seconds)
        let time = convert(Number(input.value), input.id)

        // сетваме values на всяко поле
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }

}