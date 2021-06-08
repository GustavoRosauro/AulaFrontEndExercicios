let votosPC = 0;
let votosTC = 0;
let votosSC = 0;
let votoPC = document.getElementById('votoPC');
let votoTC = document.getElementById("votoTC");
let votoSC = document.getElementById("votoSC");
let pvotoPC = document.getElementById('pvotoPC');
let pvotoTC = document.getElementById("pvotoTC");
let pvotoSC = document.getElementById("pvotoSC");
let porcvotoPC = document.getElementById('porcvotoPC');
let porcvotoTC = document.getElementById('porcvotoTC');
let porcvotoSC = document.getElementById('porcvotoSC');

votoPC.addEventListener("click",()=>{
    votosPC++;
    pvotoPC.innerHTML = `<strong>Votos: ${votosPC} </strong>`
    calcularPorcentagem();
});
votoTC.addEventListener("click",()=>{
    votosTC++;
    pvotoTC.innerHTML = `<strong> Votos: ${votosTC}</strong>`
    calcularPorcentagem();
});
votoSC.addEventListener("click",()=>{
    votosSC++;
    pvotoSC.innerHTML = `<strong>Votos: ${votosSC}</strong>`
    calcularPorcentagem();
});

const calcularPorcentagem = ()=>{
    let total = votosPC + votosSC + votosTC;
    let porcentagemPC =  (votosPC * 100)/total;
    let porcentagemTC = (votosTC * 100)/total;
    let porcentagemSC = (votosSC * 100)/total;
    porcvotoPC.innerHTML = porcentagemPC;
    porcvotoSC.innerHTML =porcentagemSC;
    porcvotoTC.innerHTML = porcentagemTC;
}
