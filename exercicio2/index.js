let primeiraNota = document.getElementById('primeiraNota');
let segundaNota = document.getElementById('segundaNota');
let terceiraNota = document.getElementById('terceiraNota');
let button = document.getElementById('button');

button.addEventListener("click",()=>{
    let primeiraNotaFloat = parseFloat(primeiraNota.value)
    let segundaNotaFloat = parseFloat(segundaNota.value)
    let terceiraNotaFloat = parseFloat(terceiraNota.value)
    let media = calcularMedia(primeiraNotaFloat, segundaNotaFloat, terceiraNotaFloat);
    alert(`A sua média foi de ${media.toFixed(2)} e sua situação é ${retornarAprovado(media)}`)
})

const calcularMedia = (primeiraNota,segundaNota,terceiraNota)=>{
    return (primeiraNota + segundaNota + terceiraNota)/3
}
const retornarAprovado = (mediaFunc) =>{
    let status = "Reprovado";
    if(mediaFunc >= 7){
        status = "Aprovado"
    }
    return status;
}