let amigo = {
    nome: 'Kelvin',
    idade: 29,
    sexo: 'M',
    peso: 65,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(7)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg e tem ${amigo.idade} anos`)