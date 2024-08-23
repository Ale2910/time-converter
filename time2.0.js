// Alguns valores que serão usados
let res

let monthApproxMsg = ''
let initialValue
//let inputUnit = ''
let outputUnit = ''

//? Tenho que trocar o equivale
let finalMsg = `${initialValue} em ${outputUnit} equivale ${monthApproxMsg} ${x}`


// Todas as conversões
const convert = {
    secondsTo: (opr, x) => {
        //inputUnit = 'seconds'
        initialValue = x
        switch (opr) {
            case 'minutes':
                res = x/60
                outputUnit = 'minutes'
                break;
            case 'hours':
                res = x/60/60
                outputUnit = 'hours'
                break;
            case 'days':
                res = x/60/60/24
                outputUnit = 'days'
                break;
            case 'weeks':
                res = x/60/60/24/7
                outputUnit = 'weeks'
                break;
            case 'months':
                res = x/60/60/24/7/4.28
                outputUnit = 'months'
                monthApproxMsg = 'aproximadamente'
                break;
            case 'years':
                res = x/60/60/24/7/4.28/12
                outputUnit = 'years'
                monthApproxMsg = 'aproximadamente'
                break;
        }
    },
    minutesTo: (opr, x) => {
        //inputUnit = 'minutes'
        initialValue = x
        switch (opr) {
            case 'seconds':
                res = x*60
                outputUnit = 'seconds'
                break;
            case 'hours':
                res = x/60
                outputUnit = 'hours'
                break;
            case 'days':
                res = x/60/24
                outputUnit = 'days'
                break;
            case 'weeks':
                res = x/60/24/7
                outputUnit = 'weeks'
                break;
            case 'months':
                res = x/60/24/7/4.28
                outputUnit = 'months'
                monthApproxMsg = 'aproximadamente'
                break;
            case 'years':
                res = x/60/24/7/4.28/12
                outputUnit = 'years'
                monthApproxMsg = 'aproximadamente'
                break;
        }
    },
    hoursTo: (opr, x) => {

    },
    daysTo: (opr, x) => {

    },
    weeksTo: (opr, x) => {

    },
    monthsTo: (opr, x) => {

    },
    yearsTo: (opr, x) => {

    }
}


convert.minutesTo('days', 1440)

console.log( res )