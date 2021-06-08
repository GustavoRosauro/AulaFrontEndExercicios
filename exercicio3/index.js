let valor = document.getElementById("valor");
let opcao = document.getElementById("opcao");
let button = document.getElementById("button");

button.addEventListener("click",()=>{
    let valorFloat = parseFloat(valor.value);
    alert(`O Valor da sua conversão foi ${opcaoSelecionada(opcao.value, valorFloat).toFixed(2)}`)
});

const opcaoSelecionada = (selecao, moeda) =>{
    switch(selecao){
        case "1":
            return realParaEuro(moeda)
        case "2":
            return realParaDolar(moeda)
        case "3":
            return euroParaReal(moeda)
        case "4":
           return dolarParaReal(moeda)
        default:
            return "-1";
    }
}

const realParaEuro = (moeda)=>{    
    return moeda / 6.13
}
const realParaDolar = (moeda)=>{
    return moeda / 5.04
}
const euroParaReal = (moeda)=>{
    return moeda * 6.13
}

const dolarParaReal = (moeda) =>{
    return moeda * 5.04
}