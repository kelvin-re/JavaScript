let num = Array(5, 2, 7, 1, 0)

num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.lastIndexOf(7) // indexOf pesquisa algo no vetor, caso não ache retorna -1

if (pos == -1) {
    console.log('O valor não foi encontrado!')
}
else {
    console.log(`O valor 7 está na posição ${pos}`)
}