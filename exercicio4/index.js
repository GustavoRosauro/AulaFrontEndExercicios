let notaDois = document.getElementById("notaDois");
let notaCinco = document.getElementById("notaCinco");
let notaDez = document.getElementById("notaDez");
let notaVinte = document.getElementById("notaVinte");
let notaCinquenta = document.getElementById("notaCinquenta");
let notaCem = document.getElementById("notaCem");
let notaDuzentos = document.getElementById("notaDuzentos");
let button = document.getElementById("button");

button.addEventListener("click",()=>{
    let totalDois = calcularDois(parseFloat(notaDois.value));
    let totalCinco = calcularCinco(parseFloat(notaCinco.value));
    let totalDez = calcularDez(parseFloat(notaDez.value));
    let totalVinte = calcularVinte(parseFloat(notaVinte.value));
    let totalCinquenta = calcularCinquenta(parseFloat(notaCinquenta.value));
    let totalCem = calcularCem(parseFloat(notaCem.value));
    let totalDuzentos = calcularDuzentos(parseFloat(notaDuzentos.value));
    alert("O seu total foi de "+ retornarValorTotal(totalDois,totalCinco,
                                        totalDez,totalVinte,totalCinquenta,
                                        totalCem,totalDuzentos));
})
const retornarValorTotal = (dois,cinco,dez,vinte,cinquenta,cem,duzentos)=>{
    return dois+cinco+dez+vinte+cinquenta+cem+duzentos; 
}
const calcularDois = (valor)=>{
    return valor * 2
}
const calcularCinco = (valor)=>{
    return valor * 5
}
const calcularDez = (valor)=>{
    return valor * 10
}
const calcularVinte = (valor)=>{
    return valor * 20
}
const calcularCinquenta = (valor)=>{
    return valor * 50
}
const calcularCem = (valor)=>{
    return valor * 100
}
const calcularDuzentos = (valor)=>{
    return valor * 200
}