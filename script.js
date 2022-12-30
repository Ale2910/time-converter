
// Elementos
const rad = window.document.getElementsByName('rad')
const input = window.document.getElementById('num')
const divRes = window.document.getElementById('res')
const but = {
    calc: window.document.getElementById('calcBut'),
    clear: window.document.getElementById('clearBut') 
}

// Configurando os botões
but.calc.addEventListener('click', calc)
but.clear.addEventListener('click', clear)


// Valores
let operation = 'secondsToMinutes'

// Mudando os radios
rad[0].onchange = () => [
    input.placeholder = 'Segundos',
    input.title = 'Digite aqui os segundos que você quer converter em minutos',
    operation = 'secondsToMinutes'
]

rad[1].onchange = () => [
    input.placeholder = 'Minutos',
    input.title = 'Digite aqui os minutos que você quer converter em horas',
    operation = 'minutesToHours'
]

rad[2].onchange = () => [
    input.placeholder = 'Horas',
    input.title = 'Digite aqui as horas que você quer converter em dias',
    operation = 'hoursToDays'
]

rad[3].onchange = () => [
    input.placeholder = 'Dias',
    input.title = 'Digite aqui os dias que você quer converter em semanas',
    operation = 'daysToWeeks'
]

rad[4].onchange = () => [
    input.placeholder = 'Semanas',
    input.title = 'Digite aqui as semanas que você quer converter em meses',
    operation = 'weeksToMonths'
]

rad[5].onchange = () => [
    input.placeholder = 'Meses',
    input.title = 'Digite aqui os meses que você quer converter em anos',
    operation = 'monthsToYears'
]



// Função que calcula
function calc (){
    
    // Pegando o número
    const value = input.value
    const num = Number(value)

    // Verificando o parâmetro
    try {
        if (value.length === 0) {
            throw new Error('err: Forneça um número')
    
        } else if (Number(input.value) >= 1e+50 || Number(input.value) >= 1000000000000) {
            throw new Error('cê tá me zuando, né?')

        } else if (num < 1 ) {
            throw new Error(`err: O número precisa ser pelo menos 1! Fornecido: ${num}`)

        } else if (parseInt(num) !== num) {
            throw new Error(`err: Por favor, forneça um número inteiro! Fornecido: ${num}, sugestão: ${parseInt(num)}`)
        }

    } catch (e) {
        return window.alert(e.message)
    }


    // Declarando valores
    let msgParam1 = ''
    let msgParam2 = ''
    let x = 0

    switch(operation) {
        case 'secondsToMinutes':
            x = num / 60

            if(num <= 1) {
                msgParam1 = 'segundo equivale'
            } else {
                msgParam1 = 'segundos equivalem'
            }
        
            if(parseInt(x) <= 1) {
                msgParam2 = 'minuto'
            } else {
                msgParam2 = 'minutos'
            }
            
            break;

        case 'minutesToHours':
            x = num / 60

            if(num <= 1) {
                msgParam1 = 'minuto equivale'
            } else {
                msgParam1 = 'minutos equivalem'
            }
        
            if(parseInt(x) <= 1) {
                msgParam2 = 'hora'
            } else {
                msgParam2 = 'horas'
            }
            
            break;
    
        case 'hoursToDays':
            x = num / 24
            
            if(num <= 1) {
                msgParam1 = 'hora equivale'
            } else {
                msgParam1 = 'horas equivalem'
            }
        
            if(parseInt(x) <= 1) {
                msgParam2 = 'dia'
            } else {
                msgParam2 = 'dias'
            }
            
            break;

        case 'daysToWeeks':
            x = num / 7
            
            if(num <= 1) {
                msgParam1 = 'dia equivale'
            } else {
                msgParam1 = 'dias equivalem'
            }
        
            if(parseInt(x) <= 1) {
                msgParam2 = 'semana'
            } else {
                msgParam2 = 'semanas'
            }
            
            break;

        case 'weeksToMonths':
            x = num * 7 / 30
            
            if(num <= 1) {
                msgParam1 = 'semana equivale'
            } else {
                msgParam1 = 'semanas equivalem'
            }
        
            if(parseInt(x) <= 1) {
                msgParam2 = 'mês'
            } else {
                msgParam2 = 'meses'
            }
            
            break;

        case 'monthsToYears':
            x = num / 12
            
            if(num <= 1) {
                msgParam1 = 'mês equivale'
            } else {
                msgParam1 = 'meses equivalem'
            }
        
            if(parseInt(x) <= 1) {
                msgParam2 = 'ano'
            } else {
                msgParam2 = 'anos'
            }
            
            break;   
    }


    // Verificando se o res vai ser inteiro ou não, dependendo do resultado o valor muda
    let xString = String(x).split('.')
    let val = `${xString[0]}`

    xString = xString.join('').split('')
    xString.shift()

    // Se X for decimal, val necessita de um ponto
    if(parseInt(x) !== x) {
        val += '.'
    }

    // Pegando os números que vão aparecer no resultado
    if(parseInt(x) !== x) {

        for(let i = 0; i < 100; i++) {
            if(xString[i] !== '0') {
                val += xString[i]
                break
            }
        }
    }


    // Apenas um codiguin pra ficar dahora o resultado
    let msgParam3 = ''
    
    if(val == 0.5) {
        
        if(operation === 'minuteToHours' || operation === 'daysToWeeks') {
            val = 'meia'
        } else {
            val = 'meio'
        }

    } else if (val.split('.')[1] === '5') {

        if(operation === 'minutesToHours' || operation === 'daysToWeeks') {
            val = `${val.split('.')[0]}`
            msgParam3 = ' e meia '
        } else {
            val = `${val.split('.')[0]}`
            msgParam3 = ' e meio '
        }
    }


    // Esse precisa ser em média pois o número de dias em cada mês varia    
    let extraMsg = ''
    if(operation === 'weeksToMonths'){
        extraMsg = 'em média '
    }

    // Declarando uma mensagem
    res = `${num} ${msgParam1} ${extraMsg}${val} ${msgParam2}${msgParam3}`


    // Retornando-a
    return divRes.innerHTML = res
}


// Função que limpa
function clear (){

    divRes.innerHTML = 'Limpo! 🗑️'
    input.value = ''
    input.focus()
}