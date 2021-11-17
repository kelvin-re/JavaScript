function parimp(n) {
    if (n % 2 == 0) {
        return `Número ${n} PAR!`
    }
    else{
        return `Número ${n} ÍMPAR!`
    }
}

let res = parimp(5)
console.log(res)