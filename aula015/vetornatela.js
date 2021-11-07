let valores = Array(8, 6, 44, 4, 23, 2)

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

valores.sort()

for (let pos in valores) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}