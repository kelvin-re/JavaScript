var hora_atual = new Date
var hora = hora_atual.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 6){
    console.log('Boa Madrugada!')
}
else if(hora <= 12){
    console.log('Bom dia!')
}
else if(hora <=18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite')
}