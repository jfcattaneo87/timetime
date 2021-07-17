// let monthNames = ['January', 'Febrary', 
// 'March', 'April','May', 'June', 'July', 
// 'August', 'September', 'October', 
// 'November', 'December'];

// let currentDate = new Date(); 
// let currentDay = currentDate.getDate();
// let monthNumber = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();

// let dates = document.getElementById('dates');
// let month = document.getElementById('month');
// let year = document.getElementById('year');

// let prevMonthDom = document.getElementById('prev-month');
// let nextMonthDom = document.getElementById('next-month');

// month.textContent = monthNames[monthNumber];
// year.textContent = currentYear.toString();

// prevMonthDom.addEventListener('click', ()=>lastMonth());
// nextMonthDom.addEventListener('click', ()=>nextMonth());

// writeMonth(monthNumber);

// function writeMonth(month) {

//     for(let i = startDay(); i>0;i--){
//     dates.innerHTML += `<div class="calendar__day calendar__item">${getTotalDays(monthNumber-1)-(i-1)}</div>`;  
//     }


//     for(let i=1; i<=getTotalDays(month); i++){

//         if(i===currentDay) {
//             dates.innerHTML += `<div class="calendar__day calendar__item calendar__today">${i}</div>`;
//     }else{
//         dates.innerHTML += `<div class="calendar__day calendar__item">${i}</div>`;
//         }
//     }

// }
// function getTotalDays(month) {
//     if(month === -1)month = 11;

//     if(month == 0 || month == 4 || month == 6 || month == 7 ||
//         month == 9 || month == 11 ) {

//             return 31;
            
//         }else if (month == 3 || month == 5 || month == 8 ||
//             month == 10){

//                 return 30;
//             } else {
//                 return isLeap() ? 29:28;
//             }

// }
// function isLeap() {
//     return((currentYear % 100 !== 0) && (currentYear % 4 === 0 ) || (currentYear % 400 === 0 ))
        
// }

// function startDay(){
//     let start = new Date(currentYear, monthNumber, 1);
//     return ((start.getDay()-1) === -1) ? 6 : start.getDay() -1;
// }
// function lastMonth(){

//     if(monthNumber !== 0) {
//         monthNumber--;
//     }else {
//         monthNumber = 11;
//         currentYear--;
//     }

//     setNewDate();
// }
// function nextMonth(){

//     if(monthNumber !== 11) {
//         monthNumber++;
//     }else {
//         monthNumber = 0;
//         currentYear++;
//     }

//     setNewDate();
// }


// function setNewDate(){
//     currentDate.setFullYear(currentYear, monthNumber, currentDay);
//     month.textContent = monthNames[monthNumber];
//     year.textContent = currentYear.toString();
//     dates.textContent = '';
//     writeMonth(monthNumber);

// }

let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

